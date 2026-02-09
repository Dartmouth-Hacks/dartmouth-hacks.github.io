import React from 'react';

import DartmouthCsLogo from '../assets/images/DartmouthCS_logo.png';
import LogoMonoLight from '../assets/images/LogoMonoLight.png';
import LogoWordmark from '../assets/images/Logo___wordmark_(2).png';
import MavisTire from '../assets/images/mavistire.png';
import NeuralinkLogo from '../assets/images/Neuralink_Logo.png';
import RedBullLogo from '../assets/images/Red-Bull-logo.png';
import ThayerLogo from '../assets/images/Thayer_Logo_(1).png';

const featuredSponsors = [
  { name: 'Dartmouth Department of Computer Science', logo: DartmouthCsLogo },
  { name: 'Thayer School of Engineering', logo: ThayerLogo },
];

const supportingSponsors = [
  { name: 'Anduril', logo: LogoMonoLight },
  { name: '???', logo: LogoWordmark },
  { name: 'Neuralink', logo: NeuralinkLogo },
  { name: 'Red Bull', logo: RedBullLogo },
  { name: 'Mavis Tire', logo: MavisTire },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="w-full py-32 flex flex-col items-center">
      <h2 className="text-orange-400 text-xl md:text-2xl tracking-wider mb-10">
        06 <span className="mx-2">//</span> PAST SPONSORS
      </h2>

      <div
        className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-12 py-12 border border-cyan-400/20 rounded-sm backdrop-blur-sm"
        style={{ boxShadow: '0 0 35px rgba(0,255,255,0.12)' }}
      >
        <div className="flex items-center justify-end mb-10">
          <span className="w-3.5 h-3.5 rounded-full bg-lime-300 shadow-[0_0_12px_4px_rgba(144,250,144,0.7)]" />
        </div>

        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredSponsors.map(sponsor => (
              <SponsorCard key={sponsor.name} {...sponsor} className="h-32 sm:h-36 md:h-40" />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {supportingSponsors.map(sponsor => (
              <SponsorCard key={sponsor.name} {...sponsor} className="h-24 sm:h-28 md:h-32" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type SponsorCardProps = {
  name: string;
  logo: string;
  className?: string;
};

function SponsorCard({ name, logo, className = '' }: SponsorCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-md border border-cyan-400/30 bg-white shadow-[0_25px_65px_rgba(5,22,30,0.25)] ${className}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/10 via-transparent to-transparent" />
      <div className="relative flex h-full w-full items-center justify-center px-6">
        <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
    </div>
  );
}
