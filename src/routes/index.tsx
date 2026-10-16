import { createFileRoute } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import { skillGroups } from '@/data/skills';
import { entries, profile, workGroups, projects, now, type Entry } from '@/data/content';

const resumeUrl = '/resume.pdf';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Zayd Choudhary' },
      { name: 'description', content: profile.intro },
      { property: 'og:title', content: 'Zayd Choudhary' },
      { property: 'og:description', content: profile.intro },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: Index,
});

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="content-section">
    <h2>{title}</h2>
    <div className="section-body">{children}</div>
  </section>;
}

function ExperienceRow({ entry }: { entry: Entry }) {
  return <article id={entry.id} className="experience-row">
    <div className="entry-heading"><h3>{entry.role}</h3>{entry.dates && <span className="entry-dates">{entry.dates}</span>}</div>
    <p className="entry-org">{entry.org}</p>
    <ul className="entry-bullets">{entry.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
    {entry.technologies && <p className="entry-technologies">{entry.technologies}</p>}
  </article>;
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      window.getSelection()?.removeAllRanges();
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the address stays selectable, so it can still be copied by hand.
    }
  };
  return <p className="contact-email">
    <button type="button" onClick={copy} title="Click to copy" aria-label={`Copy email address ${profile.email}`}>{profile.email}</button>
    <span className="copy-note" role="status">{copied ? 'Copied' : ''}</span>
  </p>;
}

function Index() {
  const leadership = entries.find(entry => entry.id === 'akpsi');

  return <>
    <header className="portfolio-wrap site-header">
      <nav className="nav-list" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>
    </header>
    <main id="top" className="portfolio-wrap">
      <section className="hero" aria-labelledby="portfolio-name">
        <h1 id="portfolio-name">{profile.name}</h1>
        <p className="hero-intro">{profile.intro}</p>
        <p className="hero-status">{profile.availability}. Based in {profile.location}.</p>
        <div className="link-row">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      </section>
      <Section id="work" title="Work">
        {workGroups.map(group => entries.filter(entry => entry.group === group).map(entry => <ExperienceRow key={entry.id} entry={entry} />))}
      </Section>
      <Section id="projects" title="Projects">
        {projects.map(entry => <ExperienceRow key={entry.id} entry={entry} />)}
      </Section>
      <Section id="now" title="Now">
        <p className="section-note">What I'm working on as of {profile.nowUpdated}.</p>
        {now.map(entry => <ExperienceRow key={entry.id} entry={entry} />)}
      </Section>
      <Section id="skills" title="Skills">
        <dl className="skills-list">{skillGroups.map(group => <div key={group.name}>
          <dt>{group.name}</dt>
          <dd>{group.skills.join(', ')}</dd>
        </div>)}</dl>
      </Section>
      <Section id="leadership" title="Leadership">
        {leadership && <ExperienceRow entry={leadership} />}
      </Section>
      <Section id="about" title="About">
        {profile.about.map(paragraph => <p className="about-copy" key={paragraph}>{paragraph}</p>)}
        <h3>Where I'm headed</h3>
        <p className="about-copy">{profile.directions}</p>
      </Section>
      <Section id="contact" title="Contact">
        <CopyEmail />
        <div className="link-row">
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      </Section>
    </main>
  </>;
}
