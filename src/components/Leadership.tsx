import { education, leadership } from "@/data/profile";

export default function Leadership() {
  return (
    <section id="leadership" className="border-b border-border bg-background">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-display text-sm font-medium tracking-wide text-primary uppercase">
          Beyond code
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Leadership & education
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-subtle uppercase">
              Leadership
            </h3>
            <ul className="mt-6 space-y-8">
              {leadership.map((item) => (
                <li key={`${item.role}-${item.org}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="font-display text-lg font-semibold text-foreground">
                      {item.role}
                    </p>
                    <time className="shrink-0 text-sm text-subtle">
                      {item.period}
                    </time>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-primary">
                    {item.org}
                    {item.detail ? (
                      <span className="font-normal text-subtle">
                        {" "}
                        · {item.detail}
                      </span>
                    ) : null}
                  </p>
                  {item.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {item.bullets.map((b) => (
                        <li key={b} className="text-base text-subtle">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-subtle uppercase">
              Education
            </h3>
            <div className="mt-6">
              <p className="font-display text-lg font-semibold text-foreground">
                {education.degree}
              </p>
              <p className="mt-1 text-sm font-medium text-primary">
                {education.school}
              </p>
              <time className="mt-1 block text-sm text-subtle">
                {education.period}
              </time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
