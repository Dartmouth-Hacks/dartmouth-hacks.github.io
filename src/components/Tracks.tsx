import React from 'react';

import arvrIcon from '../assets/tracks/arvr.svg';
import blockchainIcon from '../assets/tracks/blockchain.svg';
import educationIcon from '../assets/tracks/education.svg';
import gamingIcon from '../assets/tracks/gaming.svg';
import healthcareIcon from '../assets/tracks/healthcare.svg';

type Track = {
  id: string;
  title: string;
  color: string; // tailwind gradient end color
  icon: string;
};

const tracks: Track[] = [
  { id: 'edu', title: 'Education', color: 'from-[#5A3B2E] to-[#2B2B2B]', icon: educationIcon },
  { id: 'gaming', title: 'Gaming', color: 'from-[#1F5A2E] to-[#2B2B2B]', icon: gamingIcon },
  { id: 'health', title: 'Healthcare', color: 'from-[#1C5A5A] to-[#2B2B2B]', icon: healthcareIcon },
  { id: 'arvr', title: 'AR/VR', color: 'from-[#1F2E5A] to-[#2B2B2B]', icon: arvrIcon },
  { id: 'blockchain', title: 'Blockchain', color: 'from-[#5A1F50] to-[#2B2B2B]', icon: blockchainIcon }
];

function TrackCard({ t }: { t: Track }) {
  return (
    <div className={`group bg-gradient-to-b ${t.color} rounded-xl p-[1px]`} aria-label={`${t.title} track`}>
      <div className="panel-neon rounded-xl h-full flex flex-col items-center justify-center py-6 px-4 text-center">
        <img
          src={t.icon}
          alt={`${t.title} track icon`}
          className="w-auto max-w-[180px] h-36 drop-shadow-[0_0_12px_rgba(43,255,255,0.5)]"
          loading="lazy"
        />
        <div className="mt-4 text-white text-base">{t.title}</div>
      </div>
    </div>
  );
}

export function Tracks() {
  return (
    <section className="py-20 px-6 md:px-12">
      <h2 className="text-center text-orange-400 text-xl md:text-2xl tracking-wider mb-10">03 // TRACKS</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {tracks.slice(0,3).map(t => (
          <div key={t.id} className="w-60 h-80"><TrackCard t={t} /></div>
        ))}
      </div>
      <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        {tracks.slice(3).map(t => (
          <div key={t.id} className="w-60 h-80"><TrackCard t={t} /></div>
        ))}
      </div>
    </section>
  );
}
