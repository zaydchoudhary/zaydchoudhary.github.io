export type Entry = {
  id: string;
  role: string;
  org: string;
  dates?: string;
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
    "I'm a junior at Purdue studying cybersecurity with a minor in Management, graduating in December 2027. I got my start in IT through an internship with my home school district in Illinois.",
    "Outside class I build small tools I actually use, mostly with Claude. Away from the keyboard I'm usually rock climbing, hiking or playing video games.",
  ],
  directions: "I'm working toward security and IT engineering, with a focus on where that work meets AI: securing the AI tools companies now rely on, and using AI to help IT and security teams move faster. I'm also open to IT and systems roles in logistics and supply chain.",
};

export const entries: Entry[] = [
  {
    id: 'ta', role: 'Lab Instructor (Undergraduate TA)', org: 'Purdue Polytechnic, CNIT 17600', dates: 'Jan - Jun 2026', group: 'it',
    bullets: ['Led weekly labs for a class of 35 students on networking, system hardware and OS fundamentals.', 'Guided students through lab builds and live hardware, OS and network troubleshooting, helping raise lab report scores 10%.', 'Graded hundreds of lab assignments against standardized rubrics and reported recurring technical errors to faculty.'],
  },
  {
    id: 'cusd', role: 'IT Intern', org: 'CUSD 308, Oswego, IL', dates: 'Aug 2023 - May 2024', group: 'it',
    bullets: ["Delivered Tier 1 support across the district's Windows and Chromebook fleets, resolving hardware and OS faults.", 'Imaged, configured and deployed 500+ student and faculty devices, and earned the Acer Repair Certification.', 'Restored account and permission access and troubleshot LAN, Wi-Fi and printer connectivity across buildings.', 'Maintained IT inventory and verified pilot-course lab devices met required configurations and security baselines.'],
  },
  {
    id: 'cadco', role: 'Research Analyst Intern', org: 'Cadco Ltd., Winsted, CT', dates: 'Jun - Sep 2026', group: 'analysis',
    bullets: ['Built two competitive intelligence databases covering 125+ products from 15 manufacturers, correcting 15+ spec errors.', 'Verified pricing on 100+ models across 25+ distributors and found price gaps of up to 59% between dealers.', 'Designed a weighted scoring model in Excel that ranks 1,000+ product comparisons; staff refresh it monthly.'],
  },
  {
    id: 'handshake', role: 'AI Trainer', org: 'Handshake, remote', dates: 'Nov 2025 - Jan 2026', group: 'analysis',
    bullets: ['Rated and ranked 100+ AI model responses on accuracy, relevance and instruction-following against set rubrics.', 'Wrote a rationale for each rating, documenting errors and explaining why one response outranked another.', 'Wrote prompts and test questions used to evaluate model responses and find failure cases.'],
  },
  {
    id: 'akpsi', role: 'Head of Recruitment', org: 'Alpha Kappa Psi, Purdue', dates: 'Aug 2026 - now',
    bullets: ['Led recruitment for a 150+ member chapter, running a committee of 5 across 8 recruitment events.', 'Rebuilt the interview process around standardized rubrics and selected 30 new members from 300+ applicants.', 'Served as Pledge Trainer before this role (Jan - Jun 2026), coaching a pledge class of 35.'],
  },
];

// Display order of the work entries.
export const workGroups = ['it', 'analysis'];

export const projects: Entry[] = [
  {
    id: 'study-spots', role: 'Study Spots', org: 'Web and iOS app for Big Ten students', dates: 'In progress',
    bullets: ['Lets students post specific study spots, like a library desk or a café table, rate them in ten categories and report how busy they are.', 'Turns busyness reports into hourly charts, split by weekdays and weekends, across 18 Big Ten campuses.', 'Designed in Figma, then built as a web app and a native SwiftUI iOS app sharing one API, with passwordless sign-in through school email codes.'],
    technologies: 'Node.js, SQLite, vanilla JS, SwiftUI, Figma and Docker. Built with Claude Code.',
  },
  {
    id: 'spotify-lyrics', role: 'Spotify Lyrics', org: 'macOS menu bar app', dates: '2026',
    bullets: ['Shows synced lyrics for the current Spotify song in a small always-on-top bar, with the next line in gray and a click to switch to album art.', 'Reads playback position from Spotify through AppleScript and pulls timed lyrics from lrclib.net, in a single Swift file with no dependencies.'],
    technologies: 'Swift, AppKit and AppleScript. Built with Claude Code.',
  },
  {
    id: 'internship-tracker', role: 'Internship tracker', org: 'Google Sheets add-on', dates: '2026',
    bullets: ["Turns a pasted job link into a row in my application tracker by reading the posting's data from Greenhouse, Lever, Ashby and Workday pages, with an optional Claude fallback for pages that don't parse cleanly."],
    technologies: 'Google Apps Script and the Claude API.',
  },
  {
    id: 'server', role: 'Home Cloud Media Server', org: 'Personal project', dates: 'Dec 2024 - now',
    bullets: ['Co-host a self-hosted Linux media server running Jellyfin with secure remote access for users.', 'Maintain and upgrade the server software, including the Discord bots that let users request films and download them to our shared library.', 'Configured RAID arrays, scheduled backups and restore testing to protect against drive and configuration failures.', 'Monitor uptime, storage health and network traffic, and resolve permission and connectivity issues through system logs.'],
  },
];

// Current focus section. Keep it short; anything covered above doesn't need repeating here.
export const now: Entry[] = [
  {
    id: 'now-recruitment', role: 'Recruitment process improvement', org: 'Alpha Kappa Psi, Purdue',
    bullets: ["Recruitment season is over, so I'm running a continuous improvement project to standardize our recruiting process and make the handoff to the next leaders smooth."],
  },
  {
    id: 'now-ai-training', role: 'AI Trainer', org: 'Multiple companies, remote',
    bullets: ['Evaluating model responses and writing test prompts for several AI companies.'],
  },
  {
    id: 'now-isc2', role: 'ISC2 Certified in Cybersecurity', org: 'Exam prep',
    bullets: ['Studying security principles, incident response, access controls, network security and security operations.'],
  },
];
