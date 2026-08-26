"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { profile } from "@/lib/data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      animate={{
        backgroundColor: scrolled ? "var(--bg-elevated)" : "rgba(0,0,0,0)",
        borderColor: scrolled ? "var(--border)" : "rgba(0,0,0,0)",
      }}
      style={{ backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none" }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#home" className="text-[15px] font-semibold tracking-tight text-text">
          Mena Maged
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text-secondary hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-text-secondary hover:text-text transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 bg-accent text-white text-[13px] rounded-full hover:bg-accent-hover transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-text w-8 h-8 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </motion.svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-bg-elevated border-t border-border overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-text-secondary hover:text-text transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-text-secondary hover:text-text transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
              <a
                href="#contact"
                className="mt-2 px-4 py-2 bg-accent text-white text-[15px] rounded-full text-center"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
