export type Entry = {
  id: string;
  role: string;
  org: string;
  dates: string;
  group?: string;
  bullets: string[];
  technologies?: string;
};

type Profile = {
  name: string;
  intro: string;
  availability: string;
  location: string;
  email: string;
  about: string[];
  directions: string;
  now: string[];
  nowUpdated: string;
  linkedin?: string;
  github?: string;
};

export const profile: Profile = {
  name: 'Zayd Choudhary',
  intro: "Cybersecurity student at Purdue. I've imaged and deployed 500+ devices, taught networking labs, and co-host a Linux media server.",
  availability: 'Looking for summer 2027 internships',
  location: 'West Lafayette, IN',
  email: 'zchoudha@purdue.edu',
  linkedin: 'https://www.linkedin.com/in/zayd-choudhary/',
  github: 'https://github.com/zaydchoudhary',
  about: [
    "I'm a junior at Purdue studying cybersecurity with a minor in Management, graduating in December 2027.",
    "I got into IT through a school district internship back home in Illinois, where I imaged and repaired hundreds of student devices and earned the Acer Repair Certification. Since then I've taught networking labs at Purdue, done market research for a manufacturer, trained AI models, and run recruitment for a 150+ member business fraternity.",
    "Outside class I build small tools I actually use, mostly with Claude, and help run a Linux media server. When I'm away from a keyboard I'm usually rock climbing, out on a trail, or playing video games.",
  ],
  directions: "I'm aiming for security and IT engineering, and I'm most interested in where that work meets AI: securing the systems companies are building on AI, and using AI to make IT and security teams faster. Training models and building my own tools with Claude have shown me both sides of that. The other field I'd consider is logistics, where my analyst work at Cadco showed me how much of the supply chain depends on reliable systems and clean data.",
  now: ['Working as an AI trainer for multiple companies', 'Running recruitment for Alpha Kappa Psi', 'Maintaining our home cloud media server and upgrading its software stack', 'Building the Study Spots iOS app', 'Studying for ISC2 CC'],
  nowUpdated: 'October 2026',
};

export const entries: Entry[] = [
  {
    id: 'ta', role: 'Lab Instructor (Undergraduate TA)', org: 'Purdue Polytechnic, CNIT 17600', dates: 'Jan - Jun 2026', group: 'it',
    bullets: ['Led weekly labs for a class of 35 on networking, system hardware and OS fundamentals.', 'Walked students through lab builds and live hardware, OS and network troubleshooting. Lab report scores went up 10% over the semester.', 'Graded hundreds of lab assignments against standardized rubrics and flagged recurring technical errors to faculty.'],
  },
  {
    id: 'cusd', role: 'IT Intern', org: 'CUSD 308, Oswego, IL', dates: 'Aug 2023 - May 2024', group: 'it',
    bullets: ["Tier 1 support across the district's Windows and Chromebook fleets, fixing hardware and OS faults.", 'Imaged, configured and deployed 500+ student and faculty devices back into service.', 'Earned the Acer Repair Certification through the role.', 'Restored account and permission access, troubleshot LAN, Wi-Fi and printers across buildings, and checked lab machines against security baselines.'],
  },
  {
    id: 'cadco', role: 'Research Analyst Intern', org: 'Cadco Ltd., Winsted, CT', dates: 'Jun - Sep 2026', group: 'analysis',
    bullets: ['Built two competitive intelligence databases covering 125+ products from 15 manufacturers, and fixed 15+ spec errors.', 'Checked pricing on 100+ models across 25+ distributors and found price gaps of up to 59%.', 'Designed a weighted scoring model in Excel that ranks 1,000+ product comparisons. Staff refresh it every month.'],
  },
  {
    id: 'handshake', role: 'AI Trainer', org: 'Handshake, remote', dates: 'Nov 2025 - Jan 2026', group: 'analysis',
    bullets: ['Rated and ranked 100+ model responses on accuracy, relevance and instruction-following against set rubrics.', 'Wrote a rationale for every rating, documenting errors and explaining why one response beat another.', 'Wrote prompts and test questions designed to surface where models fail.'],
  },
  {
    id: 'akpsi', role: 'Head of Recruitment', org: 'Alpha Kappa Psi, Purdue', dates: 'Aug 2026 - now',
    bullets: ['Run recruitment for a 150+ member chapter with a committee of 5 and 8 events a semester.', 'Rebuilt interviews around standardized rubrics and picked 30 new members from 300+ applicants.', 'Pledge Trainer before that (Jan - Jun 2026), class of 35.'],
  },
];

// Display order of the work entries.
export const workGroups = ['it', 'analysis'];

export const projects: Entry[] = [
  {
    id: 'study-spots', role: 'Study Spots', org: 'Web and iOS app for Big Ten students', dates: 'In progress',
    bullets: ['Students post specific study spots (a desk, a floor, a café table), rate them on ten categories and report how busy they are. Reports roll up into hourly busyness charts, weekdays vs weekends.', 'Passwordless sign-in with school email codes (rate-limited, with expiring sessions). Campus data covers 18 Big Ten schools.', 'Designed in Figma first, then built a web client and a native SwiftUI iOS client on the same API.'],
    technologies: 'Node.js, SQLite, vanilla JS, SwiftUI, Figma and Docker. Built with Claude Code.',
  },
  {
    id: 'spotify-lyrics', role: 'Spotify Lyrics', org: 'macOS menu bar app', dates: '2026',
    bullets: ["An always-on-top bar that shows synced lyrics for whatever's playing in Spotify, with the next line in grey. Click to swap to album art.", 'Reads the track and playback position from Spotify over AppleScript and pulls timed lyrics from lrclib.net. One Swift file, no dependencies.'],
    technologies: 'Swift, AppKit and AppleScript. Built with Claude Code.',
  },
  {
    id: 'internship-tracker', role: 'Internship tracker', org: 'Google Sheets add-on', dates: '2026',
    bullets: ["Paste a job link and it fills a row in my application tracker. It reads the posting's own data on Greenhouse, Lever, Ashby and Workday pages, with an optional Claude fallback for messy pages."],
    technologies: 'Google Apps Script and the Claude API.',
  },
  {
    id: 'server', role: 'Home Cloud Media Server', org: 'Personal project', dates: 'Dec 2024 - now',
    bullets: ['Co-host a self-hosted Linux media server running Jellyfin, with secure remote access for our users.', 'Maintain the Discord bots that give users a simple interface to request films, which then download into our shared library.', "RAID, scheduled backups and restore tests, so one dead drive doesn't take the library with it.", 'Watch uptime, storage health and network traffic, and fix permission and connection problems from the logs.'],
    technologies: 'Linux, Jellyfin, Discord bots, RAID, backups and remote access.',
  },
];
