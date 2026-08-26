"use client";

import { motion } from "motion/react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import { HealthIcon, CarIcon, DashboardIcon, ExternalLinkIcon } from "./icons";

const icons = {
  health: HealthIcon,
  car: CarIcon,
  dashboard: DashboardIcon,
};

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
          {projects.map((project, i) => {
            const Icon = icons[project.icon as keyof typeof icons];
            return (
              <Reveal key={project.name} delay={i * 0.08}>
                <motion.div
                  className="p-6 bg-bg-elevated rounded-2xl border border-border h-full flex flex-col"
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.25)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-1">{project.name}</h3>
                  <p className="text-accent text-[13px] mb-3">{project.tag}</p>
                  <ul className="space-y-2 mb-4">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-text-secondary text-[14px] leading-relaxed list-disc list-inside"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center gap-1.5 text-accent text-[14px] font-medium pt-2"
                    >
                      Visit Site
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
