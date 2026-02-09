type ScheduleItem = {
  time: string;
  event: string;
  location: string;
};

const saturdayEvents: ScheduleItem[] = [
  { time: '8:30 AM - 10:30 AM', event: 'Check-in', location: 'Atrium' },
  { time: '10:15 AM - 10:30 AM', event: 'Walkthrough Building', location: 'Meet in Atrium!' },
  { time: '10:30 AM - 11:00 AM', event: 'Opening Ceremony', location: 'Atrium' },
  { time: '11:00 AM', event: 'HACKING BEGINS', location: 'Hacking rooms' },
  { time: '11:00 AM - 11:30 AM', event: 'Finding a Team', location: 'Atrium' },
  { time: '11:30 AM - 12:00 PM', event: 'Where to start - Navigating a hackathon for beginners', location: '008' },
  { time: '12:15 PM - 1:00 PM', event: 'Web Dev (HTML/CSS) Workshop', location: '008' },
  { time: '1:00 PM', event: 'Lunch (Dominos)', location: 'Atrium' },
  { time: '1:15 PM - 2:00 PM', event: 'Intro to Figma Workshop', location: '008' },
  { time: '2:00 PM - 3:00 PM', event: 'Neuralink Workshop', location: '008' },
  { time: '2:15 PM - 3:00 PM', event: 'React Workshop', location: '005' },
  { time: '3:00 PM - 5:00 PM', event: 'Technical Office Hours', location: 'Outside DALI' },
  { time: '3:00 PM - 4:00 PM', event: 'MLH Gemini Workshop', location: '008' },
  { time: '4:00 PM - 5:00 PM', event: 'MLH GitHub Copilot', location: '008' },
  { time: '5:15 PM - 5:45 PM', event: 'Javascript Workshop', location: '008' },
  { time: '6:00 PM - 6:45 PM', event: 'MLH Game', location: '008' },
  { time: '7:00 PM', event: 'Dinner (Han)', location: 'Atrium' },
  { time: '8:00 PM - 8:45 PM', event: 'Lang Chain', location: '008' },
  { time: '12:00 AM - 1:00 AM', event: 'Trivia Tournament', location: 'Atrium' },
];

const sundayEvents: ScheduleItem[] = [
  { time: '1:00 AM - 3:00 AM', event: 'Movie Night', location: 'Atrium' },
  { time: '8:00 AM', event: 'Breakfast (Lou\'s)', location: 'Atrium' },
  { time: '9:00 AM - 11:00 AM', event: 'Last minute office hours', location: '005' },
  { time: '11:00 AM', event: 'SUBMISSIONS DUE', location: 'Everywhere!!!' },
  { time: '11:45 AM - 1:00 PM', event: 'Judging and demos', location: '116' },
  { time: '1:00 PM - 1:30 PM', event: 'Lunch (Sawtooth)', location: 'Atrium' },
  { time: '1:30 PM - 2:00 PM', event: 'Closing Ceremony', location: 'Atrium' },
  { time: '2:00 PM - 2:30 PM', event: 'Prize Handout', location: 'Atrium' },
];

function DaySchedule({
  title,
  subtitle,
  note,
  items,
}: {
  title: string;
  subtitle: string;
  note?: string;
  items: ScheduleItem[];
}) {
  return (
    <article className="panel-neon rounded-sm p-6 md:p-7 h-full flex flex-col">
      <header className="mb-5">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-300 mb-1">
          {subtitle}
        </p>
        <h3 className="text-lg md:text-xl text-slate-100 font-semibold">{title}</h3>
        {note && <p className="text-xs md:text-sm text-slate-400 mt-2">{note}</p>}
      </header>

      <div className="w-full text-xs md:text-sm text-slate-300 border-t border-cyan-400/20 pt-3">
        <div className="grid grid-cols-[minmax(110px,135px)_minmax(0,1.6fr)_minmax(90px,1fr)] gap-2 pb-2 text-[0.7rem] md:text-[0.75rem] uppercase tracking-[0.18em] text-slate-400">
          <span>Time</span>
          <span>Event</span>
          <span>Location</span>
        </div>
        <div className="space-y-1.5">
          {items.map(item => (
            <div
              key={`${item.time}-${item.event}`}
              className="grid grid-cols-[minmax(110px,135px)_minmax(0,1.6fr)_minmax(90px,1fr)] gap-2 py-1.5 border-t border-cyan-400/10"
            >
              <div className="text-[0.78rem] md:text-xs text-slate-400">{item.time}</div>
              <div className="text-[0.85rem] md:text-sm text-slate-100">{item.event}</div>
              <div className="text-[0.78rem] md:text-xs text-slate-300">{item.location}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Schedule() {
  return (
    <section
      id="schedule"
      className="w-full py-24 flex flex-col items-center text-white px-6 md:px-12"
    >
      <h2 className="text-center text-orange-400 text-xl md:text-2xl tracking-wider mb-10">
        04 <span className="mx-2">//</span> SCHEDULE
      </h2>

      <div className="w-full max-w-6xl flex flex-col gap-8">
        <DaySchedule
          title="Saturday, April 26th"
          subtitle="Day One"
          note="All rooms are in the ECSC building unless otherwise noted."
          items={saturdayEvents}
        />
        <DaySchedule
          title="Sunday, April 27th"
          subtitle="Day Two"
          items={sundayEvents}
        />
      </div>
    </section>
  );
}

