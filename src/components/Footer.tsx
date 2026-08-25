import { profile } from "@/lib/data";
import { MailIcon, GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text">Mena Maged</h3>
            <p className="text-text-secondary text-[15px]">
              {profile.title} &mdash; {profile.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-text text-[13px]">Quick Links</h4>
            <div className="space-y-2">
              {[
                ["#about", "About"],
                ["#experience", "Experience"],
                ["#education", "Education"],
                ["#projects", "Projects"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="block text-text-secondary hover:text-text transition-colors text-[15px]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-text text-[13px]">Connect</h4>
            <div className="flex gap-4">
              <a href={`mailto:${profile.email}`} className="text-text-secondary hover:text-text transition-colors">
                <MailIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-text-tertiary text-[13px]">&copy; {new Date().getFullYear()} Mena Maged. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
