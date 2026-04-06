type ScheduleItem = {
  time: string;
  event: string;
  location: string;
};

const saturdayEvents: ScheduleItem[] = [
  { time: '8:30 AM - 10:30 AM', event: 'Check-in', location: 'Atrium' },
  { time: '9:30 AM - 10:00 AM', event: 'Walkthrough Building', location: 'Meet in Atrium' },
  { time: '9:30 AM - 10:00 AM', event: 'Workshop: FirstCapital VC Workshop', location: '008' },
  { time: '10:30 AM - 11:00 AM', event: 'Opening Ceremony', location: 'Atrium' },
  { time: '11:00 AM', event: 'Hacking Begins', location: '009, B10, B11, 001' },
  { time: '11:00 AM - 11:30 AM', event: 'Workshop: Finding a team', location: 'Atrium' },
  { time: '11:30 AM - 9:00 PM', event: 'Workshops and Tech Talks', location: 'See Tab 2' },
  {
    time: '11:30 AM - 12:00 PM',
    event: 'Workshop: Where to start - Navigating a hackathon for beginners',
    location: '008',
  },
  {
    time: '12:15 PM - 1:00 PM',
    event:
      'Workshop: Using LLM Coding Assistants with Dartmouth Chat (+ Continue or OpenCode VSCode Extension) or Copilot',
    location: '008',
  },
  { time: '1:00 PM', event: 'Lunch (Domino\'s)', location: 'Atrium' },
  { time: '1:15 PM - 2:00 PM', event: 'Workshop: Figma Workshop', location: '008' },
  { time: '3:00 PM - 3:30 PM', event: 'Workshop: Hacking with Github', location: '008' },
  { time: '3:00 PM - 5:00 PM', event: 'Office Hours', location: 'HackDartmouth' },
  { time: '3:30 PM - 4:00 PM', event: 'Workshop: Intro to AI with Google Studio', location: '008' },
  { time: '6:00 PM - 7:00 PM', event: 'MLH Game', location: 'ECSC 005' },
  { time: '6:30 PM', event: 'Dinner Pick-Up', location: 'Front Door' },
  { time: '7:00 PM', event: 'Dinner', location: 'Atrium' },
  { time: '11:00 PM - 12:00 AM', event: 'Trivia Tournament (Kahoot)', location: 'Atrium' },
  { time: '12:00 AM', event: 'Coffee/Snacks/Drinks Setup', location: 'Atrium' },
  { time: '12:00 AM - 1:00 AM', event: 'Trivia Tournament', location: 'Atrium' },
];

const sundayEvents: ScheduleItem[] = [
  { time: '1:00 AM - 3:00 AM', event: 'Movie Night', location: 'Atrium' },
  { time: '2:00 AM', event: 'Movie Night', location: 'Atrium' },
  { time: '7:30 AM', event: 'Breakfast pick-up', location: "Lou's" },
  { time: '8:00 AM', event: 'Breakfast (Lou\'s)', location: 'Atrium' },
  { time: '9:00 AM - 11:00 AM', event: 'Last minute office hours', location: 'Atrium' },
  {
    time: '10:00 AM - 11:00 AM',
    event: 'Office Hours: Last minute office hours',
    location: 'HackDartmouth Desk',
  },
  { time: '11:00 AM', event: 'Submissions Due', location: 'Everywhere' },
  { time: '11:00 AM - 11:20 AM', event: 'Organize judging tables & order', location: 'ECSC 116' },
  { time: '11:20 AM - 11:40 AM', event: "Judge's brief", location: 'ECSC 042' },
  { time: '11:45 AM - 1:00 PM', event: 'Judging and demos', location: 'ECSC 116' },
  { time: '1:00 PM', event: 'Lunch', location: 'Atrium' },
  { time: '1:00 PM - 1:30 PM', event: 'Deliberations', location: 'ECSC 042' },
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
          title="Saturday, April 11th"
          subtitle="Day One"
          note="All rooms are in the ECSC building unless otherwise noted."
          items={saturdayEvents}
        />
        <DaySchedule
          title="Sunday, April 12th"
          subtitle="Day Two"
          items={sundayEvents}
        />
      </div>
    </section>
  );
}
