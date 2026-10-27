"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_BG: Record<Theme, string> = {
  light: "#ffffff",
  dark: "#0a0a0b",
};

function readDomTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function playCornerReveal(next: Theme, onCover: () => void) {
  document.querySelector(".theme-corner-overlay")?.remove();

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

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readDomTheme);
  const busyRef = useRef(false);

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

  const toggleTheme = useCallback(() => {
    changeTheme(theme === "dark" ? "light" : "dark");
  }, [changeTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
