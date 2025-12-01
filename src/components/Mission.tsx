import React from 'react';
export function Mission() {
  return <div className="text-white py-20 px-6 md:px-12">
      <h2 className="text-center text-orange-400 text-xl md:text-2xl tracking-wider mb-10">01 // MISSION BRIEFING</h2>
      <div className="max-w-5xl mx-auto">
        <div className="panel-neon rounded-sm p-6 md:p-8">
          <h3 className="text-slate-200 text-sm mb-3">// ABOUT HACKDARTMOUTH</h3>
          <p className="text-slate-300 leading-relaxed text-sm">
            HackDartmouth is Dartmouth's premier annual hackathon, bringing innovators together right here on campus. Over 24 hours, teams will design and build groundbreaking projects while enjoying hands-on workshops, fun social activities, and an inspiring community of hackers.
          </p>
        </div>

        {/* Removed duplicate PAST PROJECTS header and blurb; now handled in Projects section */}
      </div>
    </div>;
}
