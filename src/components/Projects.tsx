import Image from "next/image";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { projects } from "@/data/profile";

function ProjectLogo({
  name,
  logo,
}: {
  name: string;
  logo: string | null;
}) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-2 shadow-sm sm:h-16 sm:w-16">
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={56}
          height={56}
          className="h-full w-full object-contain"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center rounded-lg bg-primary-soft text-primary">
          <Smartphone size={22} strokeWidth={1.75} />
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-muted">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-display text-sm font-medium tracking-wide text-primary uppercase">
          Projects
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-subtle">
          Product platforms across cooperatives, agriculture, vehicle tracking,
          education, and consumer mobile apps.
        </p>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <li key={project.name} className="py-8 first:pt-8 last:pb-8">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <ProjectLogo name={project.name} logo={project.logo} />
                  <ProjectBody project={project} linked />
                </a>
              ) : (
                <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <ProjectLogo name={project.name} logo={project.logo} />
                  <ProjectBody project={project} linked={false} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectBody({
  project,
  linked,
}: {
  project: (typeof projects)[number];
  linked: boolean;
}) {
  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <div>
          <h3
            className={`font-display text-xl font-semibold text-foreground transition-colors ${
              linked ? "group-hover:text-primary" : ""
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              {project.name}
              {linked ? (
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-subtle opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              ) : null}
            </span>
          </h3>
          <p className="mt-0.5 text-sm font-medium text-primary">
            {project.tagline}
          </p>
        </div>
        <p className="text-sm text-subtle">
          {project.company}
          <span className="mx-1.5 text-border">·</span>
          {project.region}
        </p>
      </div>

      <p className="mt-3 max-w-2xl text-base leading-relaxed text-subtle">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-subtle"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
