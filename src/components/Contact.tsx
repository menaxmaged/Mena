import { profile } from "@/lib/data";
import { MailIcon, PhoneIcon, PinIcon, GlobeIcon } from "./icons";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

const items = [
  { icon: MailIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: PhoneIcon, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: PinIcon, label: "Location", value: profile.location, href: null },
  { icon: GlobeIcon, label: "Website", value: "menaxmaged.me", href: profile.website },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-bg-subtle">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16 text-text">
            Let&apos;s Connect
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal delay={0.05}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-text">Get In Touch</h3>
                <p className="text-text-secondary mb-8">
                  I&apos;m always excited to discuss new opportunities and interesting projects. Let&apos;s build
                  something great together!
                </p>
              </div>

              <div className="space-y-4">
                {items.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-text text-[15px]">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-accent hover:text-accent-hover text-[15px]"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-text-secondary text-[15px]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
