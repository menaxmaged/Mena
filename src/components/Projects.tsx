"use client";

import { motion } from "motion/react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-bg-subtle">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16 text-text">
            Featured Projects
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <motion.div
                className="p-6 bg-bg-elevated rounded-2xl border border-border h-full"
                whileHover={{ y: -6, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.25)" }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-lg font-semibold text-text mb-1">{project.name}</h3>
                <p className="text-accent text-[13px] mb-3">{project.tag}</p>
                <ul className="space-y-2 mb-4">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="text-text-secondary text-[14px] leading-relaxed list-disc list-inside">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
