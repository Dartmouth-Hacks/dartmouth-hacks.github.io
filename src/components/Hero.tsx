import React from "react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative text-center text-white py-24 md:py-32 px-6"
    >
      <h1 className="neon-cyan text-5xl md:text-7xl font-bold tracking-wider mb-3">
        HackDartmouth
      </h1>
      <p className="text-cyan-200 text-xl md:text-2xl tracking-widest uppercase mb-4">
        lost in space
      </p>
      <p className="text-slate-200 text-lg md:text-xl mb-2">
        April 11 to 12, 2026 | Dartmouth College
      </p>
      <p className="text-slate-300 text-sm md:text-base uppercase tracking-[0.2em] mb-10">
        24 Hours | $8000 in Prizes
      </p>
      <div id="apply" className="sr-only" aria-hidden />
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          className="btn-neon rounded px-5 py-2 text-sm"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdvmzgucjraSw8nT5_eOK2A51Rb44lEeuxk8VA42gwBJ929TQ/viewform"
          target="_blank"
          rel="noreferrer"
        >
          Register
        </a>
        <button
          type="button"
          disabled
          className="btn-neon rounded px-5 py-2 text-sm bg-slate-600/40 text-slate-200 opacity-70 cursor-not-allowed"
        >
          Devpost
        </button>
      </div>
      {/* grid floor effect */}
      <div
        className="pointer-events-none absolute left-0 right-0 -bottom-10 h-64 opacity-40"
        aria-hidden
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(43,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(43,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "top",
          }}
        />
      </div>
    </section>
  );
}
