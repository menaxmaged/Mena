"use client";

import { motion } from "motion/react";
import { beyondWebDev } from "@/lib/data";
import Reveal from "./Reveal";
import { CpuIcon, MessageIcon, BoltIcon, RouterIcon, WaveformIcon, TerminalIcon, GitHubIcon } from "./icons";

const icons = {
  cpu: CpuIcon,
  message: MessageIcon,
  bolt: BoltIcon,
  router: RouterIcon,
  waveform: WaveformIcon,
  terminal: TerminalIcon,
};

export default function BeyondWebDev() {
  return (
    <section id="beyond" className="py-24 px-6 bg-bg-subtle">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight text-center mb-4 text-text">
            Beyond Web Development
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Web is the day job. Outside of it: operating systems, embedded hardware, network
            automation, and applied machine learning.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beyondWebDev.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.name} delay={i * 0.08}>
                <motion.div
                  className="p-6 bg-bg-elevated rounded-2xl border border-border h-full flex flex-col"
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.25)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-1">{item.name}</h3>
                  <p className="text-accent text-[13px] mb-3">{item.tag}</p>
                  <ul className="space-y-2 mb-4">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-text-secondary text-[14px] leading-relaxed list-disc list-inside"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.stack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-1.5 text-accent text-[14px] font-medium pt-2"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    View on GitHub
                  </a>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
