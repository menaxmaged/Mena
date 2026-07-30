import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="p-6 glass rounded-xl hover:bg-gray-800/50 transition-all duration-300">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
              <p className="text-blue-400 text-sm mb-3">{project.tag}</p>
              <ul className="space-y-2 mb-4">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="text-gray-300 text-sm leading-relaxed list-disc list-inside">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
