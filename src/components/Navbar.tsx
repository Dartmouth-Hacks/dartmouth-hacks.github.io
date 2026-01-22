import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MLHLogo from '../assets/images/MLHLogo.svg';
import HackLogo from '../assets/images/hackDartmouthLogo.svg';
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <header className="relative overflow-visible backdrop-blur-sm bg-black/30 border-b border-white/10 py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={HackLogo} alt="HackDartmouth" className="h-12 opacity-90" />
          <h1 className="text-lg md:text-xl tracking-wide text-slate-200">HackDartmouth</h1>
        </div>
        <div className="flex items-center gap-6 pr-24 md:pr-32 relative">
          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 md:gap-8 text-sm md:text-base text-slate-300">
              <li><a href="#" className="hover:text-white">Apply</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Tracks</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Schedule</a></li>
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden text-slate-200 hover:text-white z-40 p-1"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

          <img src={MLHLogo} alt="MLH" className="absolute right-0 -top-4 md:-top-6 h-20 md:h-24 z-10" />
        </div>
      </header>

      {/* Mobile full-width menu below header (pushes content) */}
      {open && (
        <nav className="md:hidden w-full bg-black/80 border-b border-white/10 mobile-header">
          <ul className="max-w-6xl mx-auto px-4 py-2 grid gap-0 text-slate-200 text-base">
            <li><a onClick={() => setOpen(false)} href="#" className="block py-2 hover:text-white">Apply</a></li>
            <li><a onClick={() => setOpen(false)} href="#" className="block py-2 hover:text-white">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#faq" className="block py-2 hover:text-white">FAQ</a></li>
            <li><a onClick={() => setOpen(false)} href="#" className="block py-2 hover:text-white">Tracks</a></li>
            <li><a onClick={() => setOpen(false)} href="#" className="block py-2 hover:text-white">Contact</a></li>
            <li><a onClick={() => setOpen(false)} href="#" className="block py-2 hover:text-white">Schedule</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}
