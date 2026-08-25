import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-bg-subtle">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16 text-text">
            Experience
          </h2>
        </Reveal>

        <div className="space-y-4">
          {experience.map((job, i) => (
            <Reveal
              key={`${job.company}-${job.role}-${job.start}`}
              delay={Math.min(i * 0.04, 0.3)}
              className="p-6 bg-bg-elevated rounded-2xl border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text">{job.role}</h3>
                  <p className="text-accent text-[15px]">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>
                <span className="text-text-tertiary text-[13px] whitespace-nowrap">
                  {job.start} &ndash; {job.end}
                </span>
              </div>
              <ul className="space-y-1.5 list-disc list-inside">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="text-text-secondary text-[15px]">
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
