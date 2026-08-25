import { profile, skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16 text-text">
            About Me
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal delay={0.05} className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">{profile.summary}</p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Based in {profile.location}, I hold a Bachelor&apos;s degree in Computer Science and Information
              Technology from the Egyptian E-Learning University (EELU). Beyond web development, my background
              includes system administration, network design, and technical team leadership.
            </p>
          </Reveal>

          <div className="space-y-4">
            {Object.entries(skills).map(([category, items], i) => (
              <Reveal key={category} delay={0.1 + i * 0.05} className="p-6 bg-bg-subtle rounded-2xl">
                <h3 className="text-[15px] font-semibold mb-4 text-text">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-bg-elevated text-text-secondary rounded-full text-[13px] border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
