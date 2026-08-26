"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { otherWork } from "@/lib/data";
import Reveal from "./Reveal";
import { ExternalLinkIcon } from "./icons";

export default function OtherWork() {
  return (
    <section id="more-work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight text-center mb-4 text-text">
            More Work
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16">
            Client and personal projects spanning music, film, gaming, mobile apps, and more.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {otherWork.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-5 bg-bg-elevated rounded-2xl border border-border h-full"
                whileHover={{ y: -4, boxShadow: "0 16px 32px -18px rgba(0,0,0,0.25)" }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#1d1d1f] flex items-center justify-center overflow-hidden shrink-0">
                  <Image src={item.icon} alt="" width={28} height={28} className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[15px] font-semibold text-text">{item.name}</h3>
                    <ExternalLinkIcon className="w-3 h-3 text-text-tertiary group-hover:text-accent transition-colors shrink-0" />
                  </div>
                  <p className="text-text-secondary text-[13px] leading-relaxed mt-1">{item.description}</p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
