import { useRef, useState, type FormEvent, type MouseEvent } from 'react';
import { profile } from '@/data/content';

const PROMPT = 'zayd@portfolio:~$';
const SECTIONS = ['work', 'projects', 'now', 'skills', 'about', 'contact'];
const HELP = `Commands: whoami, ${SECTIONS.join(', ')}, resume, linkedin, github, email, clear`;

function Prompt({ command }: { command: string }) {
  return <p className="term-line"><span className="term-prompt">{PROMPT}</span> {command}</p>;
}

export function TerminalHero({ resumeUrl }: { resumeUrl: string }) {
  const [history, setHistory] = useState<{ command: string; output: string }[]>([]);
  const [value, setValue] = useState('');
  const input = useRef<HTMLInputElement>(null);
  const links: Record<string, string | undefined> = { resume: resumeUrl, linkedin: profile.linkedin, github: profile.github };

  // Runs one command and returns what the terminal prints (null clears the screen).
  const run = (raw: string): string | null => {
    const [cmd = '', arg = ''] = raw.trim().toLowerCase().split(/\s+/);
    const name = (cmd === 'cd' || cmd === 'ls' || cmd === 'open' ? arg : cmd).replace(/^~?\/?/, '').replace(/(\/|\.pdf)$/, '');
    if (!cmd) return '';
    if (cmd === 'clear') return null;
    if (cmd === 'help') return HELP;
    if (cmd === 'whoami') return profile.intro;
    if (cmd === 'email') return profile.email;
    if (cmd === 'sudo') return 'zayd is not in the sudoers file. This incident will be reported.';
    if (SECTIONS.includes(name)) {
      document.getElementById(name)?.scrollIntoView({ behavior: 'smooth' });
      return `Opening ~/${name}`;
    }
    const link = links[name];
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
      return `Opening ${name}`;
    }
    return `command not found: ${cmd}. Type 'help' for a list.`;
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const output = run(value);
    // ponytail: keeps the last 6 commands so the window never grows past a screen.
    setHistory(previous => output === null ? [] : [...previous, { command: value, output }].slice(-6));
    setValue('');
  };

  // Clicking inside the window focuses the prompt, like a real terminal (desktop only, so phones don't pop the keyboard).
  const focusPrompt = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest('a') || !window.matchMedia('(hover: hover)').matches) return;
    input.current?.focus({ preventScroll: true });
  };

  return <div className="terminal">
    <div className="term-titlebar">
      <span className="term-dots" aria-hidden="true"><i /><i /><i /></span>
      <span className="term-title">zayd@portfolio: ~</span>
    </div>
    <div className="term-body" onClick={focusPrompt}>
      <Prompt command="whoami" />
      <h1 id="portfolio-name" className="term-name">{profile.name}</h1>
      <Prompt command="cat about.txt" />
      <p className="term-out">{profile.intro}</p>
      <Prompt command="cat status.txt" />
      <p className="term-out term-muted">{profile.availability}. Based in {profile.location}.</p>
      <Prompt command="ls ~/links" />
      <p className="term-out term-links">
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">resume.pdf</a>
        <a href={`mailto:${profile.email}`}>email</a>
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>}
        {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">github</a>}
      </p>
      <div aria-live="polite">
        {history.map((entry, index) => <div key={index}>
          <Prompt command={entry.command} />
          {entry.output && <p className="term-out term-muted">{entry.output}</p>}
        </div>)}
      </div>
      <form className="term-line" onSubmit={submit}>
        <label className="term-input-line">
          <span className="term-prompt">{PROMPT}</span>
          <input ref={input} className="term-input" value={value} onChange={event => setValue(event.target.value)}
            aria-label="Terminal command" placeholder="type help" autoComplete="off" autoCapitalize="off" autoCorrect="off" spellCheck={false} />
        </label>
      </form>
    </div>
  </div>;
}
