import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HackLogo from '../assets/images/hackDartmouthLogo.svg';

const navItems = [
  { label: 'HackDartmouth', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Apply', href: '#apply' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
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
              {navItems.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
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

          <a
            id="mlh-trust-badge"
            className="absolute right-0 -top-4 md:-top-6 h-20 md:h-24 z-10 block"
            href="https://mlh.io/na"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-gray.svg"
              alt="Major League Hacking 2026 Hackathon Season"
              className="h-full w-auto"
            />
          </a>
        </div>
      </header>

      {/* Mobile full-width menu below header (pushes content) */}
      {open && (
        <nav className="md:hidden w-full bg-black/80 border-b border-white/10 mobile-header">
          <ul className="max-w-6xl mx-auto px-4 py-2 grid gap-0 text-slate-200 text-base">
            {navItems.map(item => (
              <li key={item.label}>
                <a
                  onClick={() => setOpen(false)}
                  href={item.href}
                  className="block py-2 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
