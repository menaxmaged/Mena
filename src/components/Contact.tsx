import { profile } from "@/lib/data";
import { MailIcon, PhoneIcon, PinIcon, GlobeIcon } from "./icons";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I&apos;m always excited to discuss new opportunities and interesting projects. Let&apos;s build
                something great together!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-blue-400 hover:text-blue-300">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href={`tel:${profile.phoneHref}`} className="text-blue-400 hover:text-blue-300">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <PinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-300">{profile.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
                  <GlobeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Website</p>
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    menaxmaged.me
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
