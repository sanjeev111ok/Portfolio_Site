import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary-soft)_0%,_transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 15%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="animate-fade-up font-display text-sm font-medium tracking-wide text-primary uppercase">
            {profile.location}
          </p>

          <h1 className="animate-fade-up-delay-1 mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="animate-fade-up-delay-2 mt-3 font-display text-xl font-medium text-primary sm:text-2xl">
            {profile.title}
          </p>

          <p className="animate-fade-up-delay-3 mt-6 max-w-xl text-base leading-relaxed text-subtle sm:text-lg">
            {profile.summary}
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#4c1d95] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#5b21b6]"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View projects
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="animate-fade-up-delay-3 mt-8 flex items-center gap-4">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-subtle transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-portrait order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative flex h-72 w-64 items-end justify-center sm:h-80 sm:w-72 lg:h-[26rem] lg:w-80">
            {/* Soft studio backdrop */}
            <div
              aria-hidden
              className="absolute bottom-6 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary-soft)_0%,_transparent_70%)] sm:h-64 sm:w-64 lg:h-72 lg:w-72"
            />
            <div
              aria-hidden
              className="absolute bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl sm:h-48 sm:w-48"
            />

            {/* Ground shadow */}
            <div
              aria-hidden
              className="absolute bottom-3 left-1/2 h-4 w-36 -translate-x-1/2 rounded-[100%] bg-foreground/15 blur-md dark:bg-black/50"
            />

            <Image
              src="/sanjeev.png"
              alt={profile.name}
              width={900}
              height={900}
              priority
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
              className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-[0_18px_35px_rgba(76,29,149,0.22)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
