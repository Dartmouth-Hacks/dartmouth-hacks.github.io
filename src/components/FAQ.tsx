import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQEntry = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQEntry[] = [
  {
    question: "What is a Hackathon?",
    answer:
      "A hackathon is a 24-hour tech-focused sprint where students come together to build software and hardware projects. Bring an idea, a team, or just your curiosity and create something amazing.",
  },
  {
    question: "Who can participate?",
    answer:
      "Any current college student! No experience is required—we'll host workshops throughout the weekend so you can pick up new skills as you build.",
  },
  {
    question: "How do teams work?",
    answer:
      "Teams must have 2-4 hackers. We'll run a team formation social before hacking starts so you can meet people and form or join a group, but solo projects are not allowed.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring a laptop, chargers, headphones, and anything else you need to feel comfortable—from toiletries to your favorite blanket. Meals and snacks are on us.",
  },
  {
    question: "When is the deadline to register?",
    answer: "Participants should apply by March 20.",
  },
  {
    question: "How do I travel to HackDartmouth?",
    answer:
      "Due to budget constraints, HackDartmouth currently will not be able to provide travel reimbursement. You will receive details on how to book travel to Dartmouth once your application is accepted to the hackathon!",
  },
  {
    question: "What can I win?",
    answer:
      "Judges look at creativity, usefulness, technical difficulty, and form. Top prizes are TBA; past winners have taken home drones, Apple Watches, Nintendo Switches, Bluetooth speakers, and more.",
  },
  {
    question: "What if I have other questions?",
    answer:
      "Email dartmouthhackathon@gmail.com and we will get back to you as soon as possible.",
  },
  {
    question: "What is the MLH Code of Conduct?",
    answer: (
      <span>
        Review the guidelines on the{" "}
        <a
          href="https://mlh.io/code-of-conduct"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-300 hover:text-white underline"
        >
          MLH Code of Conduct page
        </a>
        .
      </span>
    ),
  },
];

export function FAQ() {
  const midpoint = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, midpoint), faqs.slice(midpoint)];

  return (
    <section
      id="faq"
      className="w-full py-24 flex flex-col items-center text-white relative px-6 md:px-12"
    >
      {/* Title */}
      <h2 className="text-center text-orange-400 text-xl md:text-2xl tracking-wider mb-10">
        05 <span className="mx-2">//</span> FAQs
      </h2>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {column.map((entry) => (
              <FAQItem key={entry.question} entry={entry} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQItem({ entry }: { entry: FAQEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative px-8 py-5 cursor-pointer select-none"
    >
      {/* Four blueprint bracket corners */}
      <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyan-400/60 rounded-none pointer-events-none" />
      <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-400/60 rounded-none pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyan-400/60 rounded-none pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyan-400/60 rounded-none pointer-events-none" />

      {/* Glowing content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="w-3.5 h-3.5 rounded-full bg-lime-300 shadow-[0_0_12px_4px_rgba(144,250,144,0.7)]"></span>
          <span className="text-lg text-gray-200">{entry.question}</span>
        </div>

        <ChevronDown
          className={`text-cyan-300 text-xl transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-64 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-gray-300 text-sm leading-relaxed">{entry.answer}</p>
      </div>
    </div>
  );
}
