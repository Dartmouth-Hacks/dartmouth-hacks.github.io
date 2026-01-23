import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full mt-20 border-t border-white/10 px-6 md:px-12 py-10 text-slate-300 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 text-left">
          <h3 className="text-white text-lg tracking-wide">HackDartmouth</h3>
          <p>
            Have any questions? Contact:{' '}
            <a href="mailto:dartmouthhackathon@gmail.com" className="text-orange-300 hover:text-white">
              dartmouthhackathon@gmail.com
            </a>
          </p>
          <p>
            Want to be a sponsor? Contact:{' '}
            <a href="mailto:dartmouthhackathon@gmail.com" className="text-orange-300 hover:text-white">
              dartmouthhackathon@gmail.com
            </a>
          </p>
        </div>
        <div className="space-y-2 text-left md:text-right">
          <p className="uppercase text-xs tracking-[0.3em] text-slate-400">Follow us on social media</p>
          <div className="flex gap-4 md:justify-end">
            <a
              href="https://www.instagram.com/hackdartmouth/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-200 hover:text-white"
            >
              <Instagram size={18} />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/hackdartmouth/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-200 hover:text-white"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">&copy; {new Date().getFullYear()} HackDartmouth</p>
    </footer>
  );
}
