"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_BG: Record<Theme, string> = {
  light: "#ffffff",
  dark: "#0a0a0b",
};

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function playCornerReveal(next: Theme, onCover: () => void) {
  const existing = document.querySelector(".theme-corner-overlay");
  existing?.remove();

  const root = document.documentElement;
  root.classList.add("theme-bg-revealing");

  const overlay = document.createElement("div");
  overlay.className = "theme-corner-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.style.setProperty("--theme-reveal-bg", THEME_BG[next]);

  const tr = document.createElement("span");
  tr.className = "theme-corner theme-corner-tr";
  const bl = document.createElement("span");
  bl.className = "theme-corner theme-corner-bl";
  overlay.append(tr, bl);

  // Insert behind page content (first child of body)
  document.body.prepend(overlay);

  overlay.getBoundingClientRect();
  requestAnimationFrame(() => {
    overlay.classList.add("is-expanding");
  });

  let covered = false;
  const cover = () => {
    if (covered) return;
    covered = true;
    onCover();
    root.classList.remove("theme-bg-revealing");
    overlay.remove();
  };

  window.setTimeout(cover, 560);

  overlay.addEventListener(
    "transitionend",
    (event) => {
      if (event.target === tr || event.target === bl) cover();
    },
    { once: true },
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const busyRef = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const preferred =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setThemeState(preferred);
    applyTheme(preferred);
  }, []);

  const changeTheme = useCallback((next: Theme) => {
    if (busyRef.current) return;

    const commit = () => {
      setThemeState(next);
      localStorage.setItem("theme", next);
      applyTheme(next);
      busyRef.current = false;
    };

    if (prefersReducedMotion()) {
      commit();
      return;
    }

    busyRef.current = true;
    playCornerReveal(next, commit);
  }, []);

  const setTheme = useCallback(
    (next: Theme) => {
      if (next === theme) return;
      changeTheme(next);
    },
    [changeTheme, theme],
  );

  const toggleTheme = useCallback(() => {
    changeTheme(theme === "dark" ? "light" : "dark");
  }, [changeTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className="site-content relative z-10 flex min-h-full flex-1 flex-col">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
