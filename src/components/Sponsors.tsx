import React from 'react';

export default function Sponsors() {
  return (
    <section id="sponsors" className="w-full py-32 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-orange-400 text-xl md:text-2xl tracking-wider mb-10">05 <span className="mx-2">//</span> SPONSORS</h2>

      {/* Outer Container */}
      <div
        className="
          relative w-full max-w-6xl mx-auto 
          px-12 py-10 
          border border-cyan-400/20 
          rounded-sm
          backdrop-blur-sm
        "
        style={{
          boxShadow: '0 0 35px rgba(0,255,255,0.12)',
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-10">
          <span className="text-lime-300 tracking-wider font-light">PARAM - 01</span>

          <span className="w-3.5 h-3.5 rounded-full bg-lime-300 shadow-[0_0_12px_4px_rgba(144,250,144,0.7)]"></span>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <LogoBox />
            <LogoBox />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-6">
            <LogoBox />
            <LogoBox tall />
            <LogoBox />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-6">
            <LogoBox />
            <LogoBox />
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Logo Box Component */
function LogoBox({ tall = false }: { tall?: boolean }) {
  return (
    <div className={`bg-gray-300/30 ${tall ? 'h-44' : 'h-24'} w-full rounded-sm shadow-sm`} />
  );
}
