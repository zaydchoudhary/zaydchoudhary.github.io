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
  about: string;
  education: string;
  graduation: string;
  updated: string;
  directions: string;
  now: string[];
  nowUpdated: string;
  linkedin?: string;
  github?: string;
};

export const profile: Profile = {
  name: 'Zayd Choudhary',
  intro: "Cybersecurity student at Purdue. I've imaged and deployed 1,500+ devices, taught networking labs, and run my own Linux server.",
  availability: 'Looking for summer 2027 internships',
  location: 'West Lafayette, IN',
  email: 'zchoudha@purdue.edu',
  linkedin: 'https://www.linkedin.com/in/zayd-choudhary/',
  github: '',
  about: "I study cybersecurity at Purdue with a minor in Management. Outside class I build small tools I actually use, and I run a Linux server at home. Outside of that I'm usually rock climbing, out on a trail, or making music.",
  education: 'B.S. Cybersecurity with a minor in Management',
  graduation: 'Graduating December 2027',
  updated: 'October 2026',
  directions: "I want to work where infrastructure meets the business side. For internships that means IT and security engineering, network engineering, or supply chain and logistics. Longer term I'm aiming for solutions architecture, which needs a bit of all three.",
  now: ['Running recruitment for Alpha Kappa Psi', 'Building the Study Spots iOS app', 'Studying for ISC2 CC'],
  nowUpdated: 'October 2026',
};

export const entries: Entry[] = [
  {
    id: 'ta', role: 'Lab Instructor (Undergraduate TA)', org: 'Purdue Polytechnic, CNIT 17600', dates: 'Jan - Jun 2026', group: 'it',
    bullets: ['Ran weekly networking, hardware and OS labs for 35 students.', 'Lab report scores went up 10% over the semester after I started walking students through live builds.'],
  },
  {
    id: 'cusd', role: 'IT Intern', org: 'CUSD 308, Oswego, IL', dates: 'Aug 2023 - May 2024', group: 'it',
    bullets: ['Imaged, configured and deployed 1,500+ Windows and Chromebook devices.', 'Tier 1 tickets: account access, permissions, Wi-Fi, LAN and printers. Also checked lab machines against security baselines.'],
  },
  {
    id: 'cadco', role: 'Research Analyst Intern', org: 'Cadco Ltd., Winsted, CT', dates: 'Jun - Sep 2026', group: 'analysis',
    bullets: ['Built two competitive intelligence databases covering 125+ products from 15 manufacturers, and fixed 15+ spec errors.', 'Checked pricing on 100+ models across 25+ distributors and found price gaps of up to 59%.', 'Designed a weighted scoring model in Excel that ranks 1,000+ product comparisons. Staff refresh it every month.'],
  },
  {
    id: 'handshake', role: 'AI Trainer', org: 'Handshake, remote', dates: 'Nov 2025 - Jan 2026', group: 'analysis',
    bullets: ['Rated 100+ model responses against rubrics and wrote prompts designed to make models fail.'],
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
    bullets: ['Self-hosted Jellyfin on Linux with secure remote access for a handful of users.', 'RAID plus scheduled backups that I actually restore-test.'],
    technologies: 'Linux, Jellyfin, RAID, backups and remote access.',
  },
];
