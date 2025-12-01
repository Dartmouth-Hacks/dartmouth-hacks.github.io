import React, { useState } from 'react';

type Track = {
  id: string;
  title: string;
  color: string; // tailwind gradient end color
  blurb: string;
  details: string[];
};

const tracks: Track[] = [
  { id: 'edu', title: 'Education', color: 'from-[#5A3B2E] to-[#2B2B2B]', blurb: 'Build for learning and campus life.', details: ['Student tools', 'Open education data', 'Productivity'] },
  { id: 'gaming', title: 'Gaming', color: 'from-[#1F5A2E] to-[#2B2B2B]', blurb: 'Playful, interactive, and realtime.', details: ['Multiplayer', 'AI NPCs', 'Mods'] },
  { id: 'health', title: 'Healthcare', color: 'from-[#1C5A5A] to-[#2B2B2B]', blurb: 'Health, wellness, and data.', details: ['Wearables', 'Telehealth', 'Privacy-first'] },
  { id: 'arvr', title: 'AR/VR', color: 'from-[#1F2E5A] to-[#2B2B2B]', blurb: 'Immersive reality experiences.', details: ['WebXR', 'Spatial UI', '3D tooling'] },
  { id: 'blockchain', title: 'Blockchain', color: 'from-[#5A1F50] to-[#2B2B2B]', blurb: 'On-chain apps and infra.', details: ['Wallets', 'DeFi/IDs', 'Data indexers'] }
];

function FlipCard({ t }: { t: Track }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped(f => !f)}
      onMouseLeave={() => setFlipped(false)}
      className={`flip-card group bg-gradient-to-b ${t.color} rounded-xl p-[1px]`}
      aria-label={`${t.title} track`}
    >
      <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
        {/* front */}
        <div className="flip-face panel-neon rounded-xl h-full flex flex-col items-center justify-between py-6 px-6">
          <div className="mt-2 flex-1 flex items-center justify-center" />
          <div className="mt-4 text-white text-lg">{t.title}</div>
          <p className="text-slate-300 text-xs mt-2 mb-1">{t.blurb}</p>
        </div>
        {/* back */}
        <div className="flip-face flip-back panel-neon rounded-xl h-full py-6 px-6 text-left">
          <div className="text-white text-base mb-2">{t.title}</div>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            {t.details.map(d => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div className="text-[11px] text-slate-400 mt-3">Tap/hover to flip back</div>
        </div>
      </div>
    </button>
  );
}

export function Tracks() {
  return (
    <section className="py-20 px-6 md:px-12">
      <h2 className="text-center text-orange-400 text-xl md:text-2xl tracking-wider mb-10">03 // TRACKS</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {tracks.slice(0,3).map(t => (
          <div key={t.id} className="w-72 h-96"><FlipCard t={t} /></div>
        ))}
      </div>
      <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        {tracks.slice(3).map(t => (
          <div key={t.id} className="w-72 h-96"><FlipCard t={t} /></div>
        ))}
      </div>
    </section>
  );
}
