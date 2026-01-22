import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-white/10 px-6 md:px-12 py-8 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-left">
          <div className="text-slate-300">HackDartmouth</div>
          <a href="#contact" className="text-xs mt-1 inline-block hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white">
            <Instagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/hackdartmouth/"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
          </a>
          <a href="mailto:dartmouthhackathon@gmail.com" aria-label="Email" className="text-slate-400 hover:text-white">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
