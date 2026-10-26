import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="bg-muted">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-display text-sm font-medium tracking-wide text-primary uppercase">
          Contact
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-subtle">
          Open to collaborations, client projects, and product conversations.
          Reach out anytime.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
              <Mail size={18} />
            </span>
            <span>
              <span className="block text-sm font-medium text-subtle">Email</span>
              <span className="mt-0.5 block font-medium text-foreground">
                {profile.email}
              </span>
            </span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
              <Phone size={18} />
            </span>
            <span>
              <span className="block text-sm font-medium text-subtle">Phone</span>
              <span className="mt-0.5 block font-medium text-foreground">
                {profile.phone}
              </span>
            </span>
          </a>

          <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
              <MapPin size={18} />
            </span>
            <span>
              <span className="block text-sm font-medium text-subtle">
                Location
              </span>
              <span className="mt-0.5 block font-medium text-foreground">
                {profile.location}
              </span>
            </span>
          </div>

          <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
              <GitHubIcon size={18} />
            </span>
            <span>
              <span className="block text-sm font-medium text-subtle">Social</span>
              <span className="mt-2 flex gap-4">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <GitHubIcon size={16} />
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
