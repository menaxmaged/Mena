import { profile, skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">{profile.summary}</p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Based in {profile.location}, I hold a Bachelor&apos;s degree in Computer Science and Information
              Technology from the Egyptian E-Learning University (EELU). Beyond web development, my background
              includes system administration, network design, and technical team leadership.
            </p>
          </div>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-6 glass rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
