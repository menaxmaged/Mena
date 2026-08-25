"use client";

import { FormEvent } from "react";
import { motion } from "motion/react";
import { profile } from "@/lib/data";

const fieldClass =
  "w-full px-4 py-3 bg-bg-elevated border border-border rounded-xl text-text placeholder-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    e.currentTarget.reset();
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-[13px] font-medium text-text-secondary mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" required className={fieldClass} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="email" className="block text-[13px] font-medium text-text-secondary mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={fieldClass}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[13px] font-medium text-text-secondary mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} resize-none`}
          placeholder="Tell me about your project..."
        />
      </div>

      <motion.button
        type="submit"
        className="w-full px-6 py-3 bg-accent text-white rounded-full font-medium"
        whileHover={{ scale: 1.02, backgroundColor: "var(--accent-hover)" }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </form>
  );
}
