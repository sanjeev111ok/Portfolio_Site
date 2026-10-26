import { skills } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="border-b border-border bg-muted">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-display text-sm font-medium tracking-wide text-primary uppercase">
          About
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technical skills
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-subtle">
          A practical stack for shipping web apps, mobile products, and
          multi-tenant platforms end to end.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-display text-sm font-semibold tracking-wide text-foreground uppercase">
                {category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm text-subtle"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
