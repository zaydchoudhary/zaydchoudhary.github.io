import { createFileRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { skillGroups } from '@/data/skills';
import { entries, profile, workGroups, projects, type Entry } from '@/data/content';

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
    {children}
  </section>;
}

function ExperienceRow({ entry }: { entry: Entry }) {
  return <article id={entry.id} className="experience-row">
    <div className="entry-heading"><h3>{entry.role}</h3><span className="entry-dates">{entry.dates}</span></div>
    <p className="entry-org">{entry.org}</p>
    <ul className="entry-bullets">{entry.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
    {entry.technologies && <p className="entry-technologies">{entry.technologies}</p>}
  </article>;
}

function Index() {
  const leadership = entries.find(entry => entry.id === 'akpsi');

  return <>
    <header className="portfolio-wrap site-header">
      <nav className="nav-list" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
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
        <p className="about-copy">{profile.about}</p>
        <p className="about-copy">{profile.education}, Purdue University. {profile.graduation}.</p>
        <h3>Where I'm headed</h3>
        <p className="about-copy">{profile.directions}</p>
        <h3>Now ({profile.nowUpdated})</h3>
        <ul className="entry-bullets">{profile.now.map(item => <li key={item}>{item}</li>)}</ul>
      </Section>
      <Section id="contact" title="Contact">
        <p className="about-copy">The best way to reach me is email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      </Section>
    </main>
    <footer className="portfolio-wrap site-footer">{profile.name}, updated {profile.updated}</footer>
  </>;
}
