"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/profile";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-background">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="font-display text-sm font-medium tracking-wide text-primary uppercase">
            Experience
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Professional experience
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-subtle">
            From hands-on mobile development to project leadership and founding
            a product company.
          </p>
        </Reveal>

        <Reveal className="experience-timeline-wrap mt-14" delayMs={100}>
          <ol className="experience-timeline relative space-y-0 border-l border-border pl-8">
            {experience.map((job, index) => (
              <li
                key={job.company}
                className="experience-item relative pb-12 last:pb-0"
                style={{ "--item-index": index } as CSSProperties}
              >
                <span
                  aria-hidden
                  className="experience-dot absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
                />

                <div className="flex gap-4">
                  {job.logo ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-logo mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white p-1.5 transition-opacity hover:opacity-90"
                      aria-label={`${job.company} website`}
                    >
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={36}
                        height={36}
                        className="h-full w-full object-contain"
                      />
                    </a>
                  ) : null}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/company inline-flex items-center gap-1.5 font-display text-xl font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {job.company}
                        <ArrowUpRight
                          size={15}
                          className="text-subtle opacity-0 transition-opacity group-hover/company:opacity-100"
                          aria-hidden
                        />
                      </a>
                      <time className="experience-period shrink-0 text-sm text-subtle">
                        {job.period}
                      </time>
                    </div>
                    <p className="mt-1 text-sm text-subtle">{job.location}</p>

                    <div className="mt-5 space-y-6">
                      {job.roles.map((role) => (
                        <div key={`${job.company}-${role.title}`}>
                          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <h3 className="text-base font-semibold text-primary">
                              {role.title}
                            </h3>
                            <time className="shrink-0 text-xs text-subtle sm:text-sm">
                              {role.period}
                            </time>
                          </div>
                          <ul className="mt-2.5 space-y-2">
                            {role.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="text-base leading-relaxed text-subtle"
                              >
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
