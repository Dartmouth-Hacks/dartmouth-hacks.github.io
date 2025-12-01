import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  'What is a hackathon?',
  'Who can participate?',
  'How do teams work?',
  'What should I bring?',
  'When is the deadline to register?',
  'Will there be activities or workshops?',
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="w-full py-24 flex flex-col items-center text-white relative px-6 md:px-12"
    >
      {/* Title */}
      <h2 className="text-center text-orange-400 text-xl md:text-2xl tracking-wider mb-10">
        04 <span className="mx-2">//</span> FAQs
      </h2>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {faqs.map((q, idx) => (idx < faqs.length / 2 ? <FAQItem key={idx} question={q} /> : null))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {faqs.map((q, idx) => (idx >= faqs.length / 2 ? <FAQItem key={idx} question={q} /> : null))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question }: { question: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className="relative px-8 py-5 cursor-pointer select-none">
      {/* Four blueprint bracket corners */}
      <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyan-400/60 rounded-none pointer-events-none" />
      <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-400/60 rounded-none pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyan-400/60 rounded-none pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyan-400/60 rounded-none pointer-events-none" />

      

      {/* Glowing content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="w-3.5 h-3.5 rounded-full bg-lime-300 shadow-[0_0_12px_4px_rgba(144,250,144,0.7)]"></span>
          <span className="text-lg text-gray-200">{question}</span>
        </div>

        <ChevronDown className={`text-cyan-300 text-xl transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>

      {/* Answer */}
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-300 text-sm leading-relaxed">Placeholder answer text here.</p>
      </div>
    </div>
  );
}
