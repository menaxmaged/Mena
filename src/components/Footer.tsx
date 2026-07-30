import { profile } from "@/lib/data";
import { MailIcon, GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Mena<span className="text-blue-500">.</span>
            </h3>
            <p className="text-gray-400">{profile.title} &mdash; {profile.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#education" className="block text-gray-400 hover:text-white transition-colors">
                Education
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-white transition-colors">
                <MailIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Mena Maged. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
