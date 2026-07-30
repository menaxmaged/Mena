import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}-${job.start}`} className="p-6 glass rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <p className="text-blue-400">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  {job.start} &ndash; {job.end}
                </span>
              </div>
              <ul className="space-y-1 list-disc list-inside">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="text-gray-300">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
