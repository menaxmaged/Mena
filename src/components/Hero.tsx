"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { profile } from "@/lib/data";
import { MailIcon, GitHubIcon, LinkedInIcon, GlobeIcon } from "./icons";

const socials = [
  { href: `mailto:${profile.email}`, icon: MailIcon, external: false },
  { href: profile.github, icon: GitHubIcon, external: true },
  { href: profile.linkedin, icon: LinkedInIcon, external: true },
  { href: profile.website, icon: GlobeIcon, external: true },
];

function HeroContent() {
  return (
    <>
      <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-1 ring-border">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={200}
          height={200}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-semibold tracking-tight text-text mb-5">
        {profile.name}
      </h1>
      <p className="text-xl md:text-2xl text-text-secondary mb-10 text-balance">
        {profile.title} &mdash; {profile.tagline}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
        <a href="#projects" className="px-7 py-2.5 bg-accent text-white rounded-full font-medium text-[15px]">
          View My Work
        </a>
        <a href="#contact" className="px-7 py-2.5 border border-border text-text rounded-full font-medium text-[15px]">
          Get In Touch
        </a>
      </div>
      <div className="flex justify-center gap-6">
        {socials.map(({ href, icon: Icon, external }) => (
          <a
            key={href}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="text-text-tertiary hover:text-text transition-colors"
          >
            <Icon />
          </a>
        ))}
      </div>
    </>
  );
}

function StaticHero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="max-w-3xl mx-auto text-center">
        <HeroContent />
      </div>
    </section>
  );
}

function ParallaxHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const avatarScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.12]);
  const avatarOpacity = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1, 0]);

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const headlineScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const subY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={sectionRef} className="relative h-[170vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 pt-14 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ opacity: glowOpacity }}
        >
          <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-1 ring-border"
            style={{ y: avatarY, scale: avatarScale, opacity: avatarOpacity }}
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
            style={{ y: headlineY, scale: headlineScale, opacity: headlineOpacity }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-text-secondary mb-10 text-balance"
            style={{ y: subY, opacity: subOpacity }}
          >
            {profile.title} &mdash; {profile.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
            style={{ y: ctaY, opacity: ctaOpacity }}
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

          <motion.div className="flex justify-center gap-6" style={{ opacity: ctaOpacity }}>
            {socials.map(({ href, icon: Icon, external }) => (
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
        </motion.div>
      </div>
    </section>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return reduceMotion ? <StaticHero /> : <ParallaxHero />;
}
