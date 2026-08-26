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

function HeroText() {
  return (
    <div className="max-w-xl text-center md:text-left">
      <p className="text-[15px] font-medium text-accent mb-4">{profile.title}</p>
      <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-text mb-6 text-balance">
        {profile.name}
      </h1>
      <p className="text-lg md:text-xl text-text-secondary mb-10 text-balance">{profile.tagline}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-10">
        <a href="#projects" className="px-7 py-2.5 bg-accent text-white rounded-full font-medium text-[15px]">
          View My Work
        </a>
        <a href="#contact" className="px-7 py-2.5 border border-border text-text rounded-full font-medium text-[15px]">
          Get In Touch
        </a>
      </div>
      <div className="flex justify-center md:justify-start gap-6">
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
    </div>
  );
}

function HeroPortrait() {
  return (
    <div className="relative mx-auto md:mx-0 md:ml-auto w-full max-w-sm">
      <div className="absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl" />
      <div className="aspect-square overflow-hidden rounded-[2.5rem] ring-1 ring-border shadow-2xl shadow-black/10">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={800}
          height={800}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}

function StaticHero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <HeroText />
        <HeroPortrait />
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

  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.08]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1, 0]);

  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={sectionRef} className="relative h-[170vh]">
      <div className="sticky top-0 h-screen flex items-center px-6 pt-14 overflow-hidden">
        <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ opacity: glowOpacity }}>
          <div className="absolute right-0 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
          >
            <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
              <p className="text-[15px] font-medium text-accent mb-4">{profile.title}</p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-text mb-6 text-balance">
                {profile.name}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-10 text-balance">{profile.tagline}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-10">
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
              </div>
              <div className="flex justify-center md:justify-start gap-6">
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
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto md:mx-0 md:ml-auto w-full max-w-sm"
            style={{ y: portraitY, scale: portraitScale, opacity: portraitOpacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.1 }}
          >
            <div className="absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl" />
            <div className="aspect-square overflow-hidden rounded-[2.5rem] ring-1 ring-border shadow-2xl shadow-black/10">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return reduceMotion ? <StaticHero /> : <ParallaxHero />;
}
