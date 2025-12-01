import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Projects() {
  // In the future this could be project data you fetch
  const projects = [
    { name: 'Project name' },
    { name: 'Project name' },
    { name: 'Project name' },
    { name: 'Project name' },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(i => (i === 0 ? projects.length - 1 : i - 1));
  };

  const next = () => {
    setIndex(i => (i === projects.length - 1 ? 0 : i + 1));
  };

  // Shows exactly 3 items
  const visible = [
    projects[index % projects.length],
    projects[(index + 1) % projects.length],
    projects[(index + 2) % projects.length],
  ];

  return (
    <section id="projects" className="w-full py-32 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-orange-400 text-xl md:text-2xl tracking-wider mb-10">
        02 <span className="mx-2">//</span> PAST PROJECTS
      </h2>

      <p className="text-gray-300 text-center mb-16">
        Take a look at some of last year's projects at HackDartmouth:
      </p>

      <div className="relative w-full flex items-center justify-center overflow-hidden">
        {/* Left button */}
        <button
          onClick={prev}
          className="absolute left-12 w-10 h-10 rounded-full bg-cyan-400/30 text-white flex items-center justify-center hover:bg-cyan-400/50 transition"
          aria-label="Previous"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Cards */}
        <div className="flex gap-12">
          {visible.map((p, idx) => (
            <ProjectCard key={idx} name={p.name} />
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={next}
          className="absolute right-12 w-10 h-10 rounded-full bg-cyan-400/30 text-white flex items-center justify-center hover:bg-cyan-400/50 transition"
          aria-label="Next"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

function ProjectCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Card box */}
      <div
        className="
          w-[260px] h-[260px] rounded-md
          bg-[#0d1b2a]
          border border-black
        "
      ></div>

      {/* Label */}
      <p className="text-white mt-4">{name}</p>
    </div>
  );
}
