import { education, certifications } from "@/lib/data";
import { ExternalLinkIcon } from "./icons";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16 text-text">
            Education &amp; Certifications
          </h2>
        </Reveal>

        <div className="space-y-4">
          {education.map((entry, i) => (
            <Reveal
              key={entry.school + entry.degree}
              delay={Math.min(i * 0.05, 0.2)}
              className="p-6 bg-bg-subtle rounded-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-text">{entry.degree}</h3>
                  <p className="text-accent text-[15px]">
                    {entry.school} · {entry.location}
                  </p>
                </div>
                <span className="text-text-tertiary text-[13px] whitespace-nowrap">
                  {entry.start} &ndash; {entry.end}
                </span>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.15} className="p-6 bg-bg-subtle rounded-2xl">
            <h3 className="text-lg font-semibold text-text mb-4">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3 py-1"
                >
                  <div>
                    <span className="text-text-secondary group-hover:text-text transition-colors text-[15px]">
                      {cert.name}
                    </span>
                    <p className="text-text-tertiary text-xs">
                      {cert.authority} &middot; {cert.date}
                    </p>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 mt-1 text-text-tertiary group-hover:text-accent transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
