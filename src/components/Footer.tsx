import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="font-display text-sm font-semibold text-primary">
          {profile.name}
        </p>
        <p className="text-sm text-subtle">© 2026 · Built with Next.js</p>
      </div>
    </footer>
  );
}
