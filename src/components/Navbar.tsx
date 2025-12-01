import React from 'react';
import MLHLogo from '../MLHLogo.svg';
import HackLogo from '../hackDartmouthLogo.svg';
export function Navbar() {
  return <header className="relative overflow-visible backdrop-blur-sm bg-black/30 border-b border-white/10 py-2 px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={HackLogo} alt="HackDartmouth" className="h-12 opacity-90" />
        <h1 className="text-lg md:text-xl tracking-wide text-slate-200">HackDartmouth</h1>
      </div>
      <div className="flex items-center gap-6 pr-24 md:pr-32 relative">
        <nav>
          <ul className="flex items-center gap-6 md:gap-8 text-sm md:text-base text-slate-300">
            <li><a href="#" className="hover:text-white">Apply</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Tracks</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Schedule</a></li>
          </ul>
        </nav>
        <img src={MLHLogo} alt="MLH" className="absolute right-0 -top-4 md:-top-6 h-20 md:h-24" />
      </div>
    </header>;
}
