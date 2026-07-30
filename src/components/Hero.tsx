import Image from "next/image";
import { profile } from "@/lib/data";
import { MailIcon, GitHubIcon, LinkedInIcon, GlobeIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-700 animate-float">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gray-300">Hi, I&apos;m</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
          {profile.title} &mdash; {profile.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-white transition-colors">
            <MailIcon />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <LinkedInIcon />
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <GlobeIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
