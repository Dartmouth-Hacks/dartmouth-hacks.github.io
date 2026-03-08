import React, { useState } from 'react';

import arvrIcon from '../assets/tracks/arvr.svg';
import aiIcon from '../assets/tracks/blockchain.svg';
import educationIcon from '../assets/tracks/education.svg';
import gamingIcon from '../assets/tracks/gaming.svg';
import healthcareIcon from '../assets/tracks/healthcare.svg';

type Track = {
  id: string;
  title: string;
  color: string; // tailwind gradient end color
  blurb: string;
  details: string[];
  icon: string;
};

const tracks: Track[] = [
  {
    id: 'edu',
    title: 'Education',
    color: 'from-[#5A3B2E] to-[#2B2B2B]',
    blurb: 'Build the next generation of EdTech for learners everywhere.',
    details: ['EdTech', 'Research', 'K-12 Education', 'Social Impact', 'Continuing Education', 'Gamification'],
    icon: educationIcon,
  },
  {
    id: 'gaming',
    title: 'Gaming',
    color: 'from-[#1F5A2E] to-[#2B2B2B]',
    blurb: 'Level up gameplay, community, and accessibility.',
    details: ['Game Design', 'Esports', 'Entertainment', 'Education', 'Skills Training', 'Accessibility in Gaming'],
    icon: gamingIcon,
  },
  {
    id: 'health',
    title: 'Healthcare',
    color: 'from-[#1C5A5A] to-[#2B2B2B]',
    blurb: 'Innovate tools that support holistic health and care.',
    details: ['Mental Health', 'Reproductive Health', 'Holistic Care', 'Nutrition', 'COVID-19', 'General Healthcare'],
    icon: healthcareIcon,
  },
  {
    id: 'arvr',
    title: 'AR/VR',
    color: 'from-[#1F2E5A] to-[#2B2B2B]',
    blurb: 'Create immersive worlds for learning, design, and play.',
    details: [
      'Immersive Learning',
      'Virtual Training',
      'Accessibility & Inclusion',
      'Architecture & Design Visualization',
      'Enhanced Shopping Experiences',
      'Sports & Fitness Tracking',
    ],
    icon: arvrIcon,
  },
  {
    id: 'ai',
    title: 'AI',
    color: 'from-[#1F3A5A] to-[#2B2B2B]',
    blurb: 'Use machine learning to solve real-world problems.',
    details: ['Large Language Models', 'Computer Vision', 'Generative AI', 'Responsible AI & Ethics', 'AI Agents', 'ML for Social Good'],
    icon: aiIcon,
  },
];

function FlipCard({ t }: { t: Track }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped(f => !f)}
      onMouseLeave={() => setFlipped(false)}
      className={`flip-card group bg-gradient-to-b ${t.color} rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-300/50`}
      aria-label={`${t.title} track`}
    >
      <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
        {/* front */}
        <div className="flip-face panel-neon rounded-xl h-full flex flex-col items-center justify-between py-6 px-6">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={t.icon}
              alt={`${t.title} track icon`}
              className="w-auto max-w-[180px] h-36 drop-shadow-[0_0_12px_rgba(43,255,255,0.5)]"
              loading="lazy"
            />
          </div>
          <div className="text-white text-xl font-semibold">{t.title}</div>
          <p className="text-slate-300 text-sm mt-2 mb-1 text-center leading-relaxed">{t.blurb}</p>
          <span className="text-[11px] text-slate-400">Tap/hover to flip</span>
        </div>
        {/* back */}
        <div className="flip-face flip-back panel-neon rounded-xl h-full py-6 px-6 text-left">
          <div className="text-white text-base mb-2">Focus Areas</div>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            {t.details.map(detail => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="text-[11px] text-slate-400 mt-3">Tap/hover to flip back</div>
        </div>
      </div>
    </button>
  );
}

export function Tracks() {
  const firstRow = tracks.slice(0, 3);
  const secondRow = tracks.slice(3);

  return (
    <section id="tracks" className="py-20 px-6 md:px-12">
      <h2 className="text-center text-orange-400 text-xl md:text-2xl tracking-wider mb-10">03 // TRACKS</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {firstRow.map(t => (
          <div key={t.id} className="w-64 h-[22rem] sm:w-72 sm:h-[24rem]">
            <FlipCard t={t} />
          </div>
        ))}
      </div>
      <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        {secondRow.map(t => (
          <div key={t.id} className="w-64 h-[22rem] sm:w-72 sm:h-[24rem]">
            <FlipCard t={t} />
          </div>
        ))}
      </div>
    </section>
  );
}
