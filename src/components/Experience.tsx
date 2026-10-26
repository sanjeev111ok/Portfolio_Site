import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-background">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-display text-sm font-medium tracking-wide text-primary uppercase">
          Experience
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Professional experience
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-subtle">
          From hands-on mobile development to project leadership and founding a
          product company.
        </p>

        <ol className="relative mt-14 space-y-0 border-l border-border pl-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative pb-12 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {job.role}
                </h3>
                <time className="shrink-0 text-sm text-subtle">{job.period}</time>
              </div>
              <p className="mt-1 text-sm font-medium text-primary">
                {job.company}
                <span className="font-normal text-subtle"> · {job.location}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-base leading-relaxed text-subtle"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
