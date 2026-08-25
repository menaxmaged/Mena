"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/lib/data";
import { MailIcon, GitHubIcon, LinkedInIcon, GlobeIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="w-28 h-28 mx-auto mb-8 rounded-full overflow-hidden ring-1 ring-border"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={200}
            height={200}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        <motion.h1
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-semibold tracking-tight text-text mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 24, delay: 0.1 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-text-secondary mb-10 text-balance"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 24, delay: 0.2 }}
        >
          {profile.title} &mdash; {profile.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 24, delay: 0.3 }}
        >
          <motion.a
            href="#projects"
            className="px-7 py-2.5 bg-accent text-white rounded-full font-medium text-[15px]"
            whileHover={{ scale: 1.04, backgroundColor: "var(--accent-hover)" }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-7 py-2.5 border border-border text-text rounded-full font-medium text-[15px]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {[
            { href: `mailto:${profile.email}`, icon: MailIcon, external: false },
            { href: profile.github, icon: GitHubIcon, external: true },
            { href: profile.linkedin, icon: LinkedInIcon, external: true },
            { href: profile.website, icon: GlobeIcon, external: true },
          ].map(({ href, icon: Icon, external }) => (
            <motion.a
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-text-tertiary hover:text-text transition-colors"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
