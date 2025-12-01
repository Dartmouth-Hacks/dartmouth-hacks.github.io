import React from 'react';
export function Hero() {
  return <div className="relative text-center text-white py-24 md:py-28">
      <h1 className="neon-cyan text-5xl md:text-7xl font-bold tracking-wider mb-8">HACKDARTMOUTH XI</h1>
      <div className="flex gap-4 justify-center">
        <a className="btn-neon rounded px-4 py-2 text-sm" href="#">REGISTER NOW</a>
        <a className="btn-neon rounded px-4 py-2 text-sm" href="#">DEVPOST</a>
      </div>
      {/* grid floor effect */}
      <div className="pointer-events-none absolute left-0 right-0 -bottom-10 h-64 opacity-40" aria-hidden>
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(43,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(43,255,255,0.25) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'top'
        }} />
      </div>
    </div>;
}
