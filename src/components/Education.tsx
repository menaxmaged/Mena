import { education, certifications } from "@/lib/data";
import { ExternalLinkIcon } from "./icons";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Education &amp; Certifications
          </span>
        </h2>

        <div className="space-y-8">
          {education.map((entry) => (
            <div key={entry.school + entry.degree} className="p-6 glass rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{entry.degree}</h3>
                  <p className="text-blue-400">
                    {entry.school} · {entry.location}
                  </p>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  {entry.start} &ndash; {entry.end}
                </span>
              </div>
            </div>
          ))}

          <div className="p-6 glass rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3 py-1"
                >
                  <div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{cert.name}</span>
                    <p className="text-gray-500 text-xs">
                      {cert.authority} &middot; {cert.date}
                    </p>
                  </div>
                  <ExternalLinkIcon className="w-4 h-4 mt-1 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
