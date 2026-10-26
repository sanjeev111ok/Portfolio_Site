import { projects } from "@/data/profile";

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
          Platforms spanning cooperatives, agriculture, vehicle tracking, and
          education — web, mobile, and admin dashboards.
        </p>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <li
              key={project.name}
              className="group grid gap-4 py-8 transition-colors first:pt-8 last:pb-8 sm:grid-cols-[1fr_1.4fr] sm:gap-10"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {project.tagline}
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-subtle">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
