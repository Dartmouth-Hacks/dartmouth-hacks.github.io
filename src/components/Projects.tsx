import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import DartworldImg from '../assets/images/pastprojects/Dartworld.png';
import DebatablyImg from '../assets/images/pastprojects/Debatably.png';
import GitConnectImg from '../assets/images/pastprojects/Git-Connect.png';
import LoveLanguageImg from '../assets/images/pastprojects/Love-Language.png';
import WebCiteImg from '../assets/images/pastprojects/WebCite.png';

const projects = [
  { name: 'Dartworld', image: DartworldImg },
  { name: 'Debatably', image: DebatablyImg },
  { name: 'Git Connect', image: GitConnectImg },
  { name: 'Love Language', image: LoveLanguageImg },
  { name: 'WebCite', image: WebCiteImg },
];

export function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [mounted, setMounted] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  const prev = () => {
    setLastInteraction(Date.now());
    setDirection('prev');
    setIndex(i => (i === 0 ? projects.length - 1 : i - 1));
  };

  const next = () => {
    setLastInteraction(Date.now());
    setDirection('next');
    setIndex(i => (i + 1) % projects.length);
  };

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      if (Date.now() - lastInteraction >= 5000) {
        setDirection('next');
        setIndex(i => (i + 1) % projects.length);
      }
    }, 5000);
    return () => clearInterval(id);
  }, [lastInteraction]);
  const positions = ['carousel-left', 'carousel-center', 'carousel-right'];
  const offsets = [-1, 0, 1];
  const visible = offsets.map(offset => projects[(index + offset + projects.length) % projects.length]);

  return (
    <section id="projects" className="w-full py-32 flex flex-col items-center">
      <h2 className="text-orange-400 text-xl md:text-2xl tracking-wider mb-10">
        02 <span className="mx-2">//</span> PAST PROJECTS
      </h2>

      <div className="relative w-full max-w-5xl px-6 md:px-0 flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-2 sm:-left-10 w-10 h-10 rounded-full bg-cyan-400/30 text-white flex items-center justify-center hover:bg-cyan-400/50 transition"
          aria-label="Previous"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="carousel-stage w-full">
          {visible.map((project, idx) => {
            const enteringClass = mounted
              ? direction === 'next' && idx === 2
                ? 'carousel-enter-right'
                : direction === 'prev' && idx === 0
                  ? 'carousel-enter-left'
                  : ''
              : '';
            return (
              <ProjectCard
                key={project.name}
                project={project}
                className={`carousel-item ${positions[idx]} ${enteringClass}`}
              />
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-2 sm:-right-10 w-10 h-10 rounded-full bg-cyan-400/30 text-white flex items-center justify-center hover:bg-cyan-400/50 transition"
          aria-label="Next"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

type Project = {
  name: string;
  image: string;
};

function ProjectCard({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <article className={className}>
      <div className="rounded-lg overflow-hidden border border-cyan-400/30 shadow-[0_20px_45px_rgba(5,22,30,0.35)] bg-black/60">
        <img src={project.image} alt={project.name} className="w-full h-64 object-cover" loading="lazy" />
      </div>
      <p className="text-white mt-4 text-center text-lg">{project.name}</p>
    </article>
  );
}
