import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, Code2, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import './style.css';

const projects = [
  { number: '01', title: 'Form Builder', text: 'A full stack form platform with authentication, dynamic form creation, publishing, response collection, and a management dashboard.', tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'], color: 'pink', preview: 'form' },
  { number: '02', title: 'AfriMart', text: 'A responsive fashion marketplace connecting buyers and sellers through product discovery, carts, shops, and order tracking.', tags: ['React', 'Tailwind', 'REST API', 'E-commerce'], color: 'yellow', preview: 'market' },
  { number: '03', title: 'Weather Insight', text: 'A live weather comparison tool for exploring temperature, wind, and environmental conditions with meaningful change alerts.', tags: ['JavaScript', 'Weather API', 'Responsive UI'], color: 'blue', preview: 'weather' },
];

const moreProjects = [
  { number: '04', title: 'Travel Destination & Booking Platform', description: 'Explore destinations, view travel information, and plan trips through a responsive, accessible interface.', url: 'https://ays27.github.io/Etravel/', action: 'Visit project' },
  { number: '05', title: 'Memory Scrapbook Platform', description: 'Create and manage digital memories with images and descriptive content in a responsive app.', url: 'https://memory-scrapbook1.vercel.app/', action: 'Visit project' },
  { number: '06', title: 'Birthday Reminder Web App', description: 'Full stack birthday manager with sign in, CRUD operations, API routes, and PostgreSQL.', url: 'https://birthdayreminderwithwishes.vercel.app/', action: 'Visit project' },
  { number: '07', title: 'National ID Maker', description: 'PHP app that processes Fayda ID images and creates standardized, printable layouts.', url: 'https://github.com/Ays27/pdf_projec', action: 'View on GitHub' },
];

const approach = [
  { id: '01', name: 'Frontend', eyebrow: 'CURRENT FOCUS', title: 'Build the interface', description: 'Responsive, accessible experiences built with Vue, Next, React, TypeScript, and Tailwind CSS.', tags: ['HTML / CSS', 'JavaScript', 'Vue', 'React', 'Next.js', 'Tailwind'], code: ['const developer = {', '  name: “Aynalem”,', '  mindset: “always learning”,', '  details: true,', '  ship: “useful software”', '};'] },
  { id: '02', name: 'Full-stack', eyebrow: 'FROM IDEA TO LAUNCH', title: 'Make it work end to end', description: 'I connect thoughtful interfaces to reliable APIs, data models, and the details that make products useful.', tags: ['Node.js', 'PostgreSQL', 'REST APIs', 'Prisma', 'Authentication'], code: ['const product = {', '  frontend: “React”,', '  database: “PostgreSQL”,', '  api: “well documented”,', '  outcome: “ready to ship”', '};'] },
  { id: '03', name: 'Analytics', eyebrow: 'LEARN FROM USE', title: 'Make every detail count', description: 'I use product analytics and real feedback to understand what is working and where an experience can improve.', tags: ['Google Analytics', 'Events', 'Insights', 'Iteration'], code: ['const insights = {', '  listen: “to people”,', '  measure: “what matters”,', '  learn: “from real use”,', '  improve: true', '};'] },
  { id: '04', name: 'Reliability', eyebrow: 'BUILT TO LAST', title: 'Care about what is underneath', description: 'Clear structure, sensible testing, and careful performance work keep a product dependable as it grows.', tags: ['Performance', 'Accessibility', 'Quality', 'Security'], code: ['const quality = {', '  accessible: true,', '  performance: “measured”,', '  code: “maintainable”,', '  users: “first”', '};'] },
];

function Logo() { return <a className="brand" href="#top" aria-label="Aynalem Sitotaw home"><span className="brand-mark">AS</span><span>Aynalem Sitotaw</span></a>; }

function Preview({ type }) {
  if (type === 'form') return <div className="preview-window form-window"><div className="mini-sidebar"><b>F</b><i /><i /><i /></div><div className="mini-form"><small>UNTITLED FORM</small><strong>Tell us what you think</strong><span>YOUR EMAIL</span><hr /><span>YOUR MESSAGE</span><hr /><b>Submit →</b></div></div>;
  if (type === 'market') return <div className="preview-window image-preview afrimart-preview"><img className="afrimart-hero-image" src="/images/afrimart1.png" alt="AfriMart fashion marketplace homepage" /><img className="afrimart-categories-image" src="/images/afrimart2.png" alt="AfriMart men, women, and kids category cards" /></div>;
  if (type === 'weather') return <div className="preview-window image-preview weather-preview"><img src="/images/weatheralert.png" alt="Weather Insight city comparison interface" /></div>;
  return <div className="preview-window weather-window"><div className="weather-head"><span>ADDIS ABABA</span><span>LIVE</span></div><div className="weather-temp">24°<span className="sun" /></div><hr /><div className="weather-foot"><span>Wind 8 km/h</span><span>Feels like 23°</span></div></div>;
}

function HeroArt() {
  return <div className="hero-art" aria-label="A playful developer profile interface illustration">
    <div className="orbit orbit-one" /><div className="orbit-dot">✦</div><div className="sticker grad">Graduating 2027</div>
    <div className="profile-window"><div className="window-top"><div className="traffic"><i /><i /><i /></div><span>player_profile.exe</span></div>
      <div className="profile-content"><div className="avatar-side"><div className="antenna" /><div className="robot"><div className="robot-face"><i /><i /></div><div className="robot-body">AS</div></div><span className="player-tag">PLAYER 01</span></div>
        <div className="profile-stats"><small>STATUS</small><strong>Ready to build</strong><small>CURIOSITY</small><div className="meter"><i style={{width:'98%'}} /></div><small>FRONTEND</small><div className="meter"><i style={{width:'88%'}} /></div><small>TEAMWORK</small><div className="meter"><i style={{width:'93%'}} /></div></div></div>
      <div className="terminal"><span>$</span> pnpm build → shipped successfully <b>▮</b></div>
    </div><div className="sticker based">Based in Ethiopia</div><div className="plus">+</div>
  </div>;
}

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const tab = approach[activeTab];
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <>
    <div id="top" />
    <div className="availability"><span className="green-dot" /> Currently open to internships and collaborative projects <a href="#contact">Let’s talk <ArrowRight size={13} /></a></div>
    <header className="site-header"><div className="nav-inner"><Logo /><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#projects" onClick={closeMenu}>Projects</a><a href="#approach" onClick={closeMenu}>How I work</a><a href="#about" onClick={closeMenu}>About</a></nav>
      <div className="nav-actions"><a className="icon-button" href="https://github.com/Ays27" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a><a className="button button-dark nav-cta" href="#contact">Get in touch <ArrowUpRight size={15} /></a></div>
    </div></header>
    <main>
      <section className="hero section-paper"><div className="hero-inner"><div className="hero-copy" data-reveal><p className="eyebrow"><Code2 size={13} /> FRONTEND DEVELOPER <span>·</span> CS STUDENT</p><h1>I build web apps<br />that <span className="highlight">work</span> for<br className="desktop-break" /> people.</h1><p className="hero-lede">Hey, I’m <strong>Aynalem.</strong> I turn product ideas into fast, responsive web experiences—and I care just as much about what happens behind the interface.</p><div className="hero-buttons"><a className="button button-orange" href="#projects">See what I’ve built <ArrowRight size={17} /></a><a className="text-link" href="https://github.com/Ays27" target="_blank" rel="noreferrer">Browse my GitHub</a></div><div className="tool-row"><span>Working with</span><b>NUXT</b><b>VUE</b><b>TS</b><b>REACT</b><b>POSTGRES</b></div></div><div data-reveal><HeroArt /></div></div></section>
      <div className="ticker" aria-label="Learn, ship, measure, improve"><div>LEARN <i>◆</i> SHIP <i>◆</i> MEASURE <i>◆</i> IMPROVE <i>◆</i> BUILD <i>◆</i> TEST <i>◆</i> LEARN <i>◆</i> SHIP <i>◆</i> MEASURE <i>◆</i> IMPROVE <i>◆</i></div></div>
      <section className="projects section-light" id="projects"><div className="content-wrap"><div className="section-heading projects-heading" data-reveal><div><p className="eyebrow"><span className="accent-line" /> SELECTED WORK</p><h2>Projects with a job<br className="desktop-break" /> to do.</h2></div><p className="heading-note">Not concept art. Working products shaped by authentication, data, APIs, responsive design, and real user flows.</p></div>
        <div className="project-grid">{projects.map((project, index) => <article className="project-card" data-reveal key={project.number} style={{'--reveal-delay': `${index * 100}ms`}}><div className={`project-visual ${project.color}`}><span className="project-number">PROJECT / {project.number}</span><Preview type={project.preview} /></div><div className="project-details"><h3>{project.title}</h3><p>{project.text}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href="#contact">Explore project <ArrowRight size={14} /></a></div></article>)}</div>
        <div className="more-list"><div className="more-label"><span>MORE BUILDS</span><span>04 — 07</span></div>{moreProjects.map((project, index) => <a className="more-row" data-reveal style={{'--reveal-delay': `${index * 70}ms`}} href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.action}: ${project.title}`} key={project.number}><span className="more-num">{project.number}</span><strong>{project.title}</strong><span className="more-desc">{project.description}</span><span className="more-action">{project.action} <ArrowUpRight size={13} /></span></a>)}</div>
      </div></section>
      <section className="approach section-paper" id="approach"><div className="content-wrap"><div className="section-heading" data-reveal><div><p className="eyebrow"><span className="accent-line" /> MY APPROACH</p><h2>More than making it<br className="desktop-break" /> look right.</h2></div><p className="heading-note">I like owning the full path from the first component to the production signal that proves it works.</p></div>
        <div className="approach-panel" data-reveal><div className="tab-list" role="tablist" aria-label="Areas of focus">{approach.map((item,i) => <button key={item.id} role="tab" aria-selected={activeTab === i} className={activeTab === i ? 'active' : ''} onClick={() => setActiveTab(i)}><small>{item.id}</small>{item.name}</button>)}</div><div className="approach-content"><div className="approach-copy"><p className="mini-eyebrow">{tab.eyebrow}</p><h3>{tab.title}</h3><p>{tab.description}</p><div className="tag-list">{tab.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="code-card"><div className="code-top"><span><i /><i /><i /></span><small>component.vue</small></div><pre>{tab.code.map((line, i)=><span key={i} className={i===0 || i===tab.code.length-1 ? 'code-highlight' : ''}>{line}{'\n'}</span>)}</pre><div className="code-bottom"><span className="green-dot" /> No errors, ready to ship.</div></div></div></div>
      </div></section>
      <section className="human" id="about"><div className="human-inner content-wrap"><div className="human-left"><p className="eyebrow"><span className="accent-line" /> THE HUMAN PART</p><strong className="giant-number">01</strong><span className="small-caption">DEVELOPER<br />MANY PROJECTS</span></div><div className="human-main" data-reveal><blockquote>“The best way I know to learn is to build something real, understand where it breaks, and make it better.”</blockquote><div className="bio-columns"><p>I’m a computer science student at <strong>Bahir Dar University</strong>, graduating in 2027. I’m drawn to web development because it combines structured problem-solving with the chance to make technology genuinely easier to use.</p><p>I’ve extended my studies through a computer science bootcamp with Open Hearts Big Dreams and cybersecurity training with Bunna Bank. I bring communication, attention to detail, analytical thinking, and a collaborative mindset to every team.</p></div><div className="experience-card"><div className="experience-year">2026<span /></div><div><p className="mini-eyebrow">WORK EXPERIENCE</p><h3>Front-End Web Developer Intern</h3><strong className="experience-place">AFRIMART · ADDIS ABABA, ETHIOPIA</strong><p>Built a responsive e-commerce frontend and implemented Google Analytics, PostHog, performance monitoring, and error tracking to make product decisions and debugging faster.</p></div></div><article className="experience-card challenge-card"><div className="experience-year">2026<span /></div><div><p className="mini-eyebrow">CHALLENGES &amp; PROJECTS</p><h3>Front-End Developer — Gym &amp; Fitness Management System</h3><strong className="experience-place">BROLF TECH · REMOTE INTERNSHIP CHALLENGE 2026</strong><p>Developing a responsive gym management platform using React, TypeScript, and Tailwind CSS, featuring role-based dashboards for administrators, trainers, reception staff, and members. Implementing membership management, class bookings, attendance tracking, and fitness progress with mock data, client-side persistence, and automated testing.</p></div></article></div></div></section>
      <section className="contact" id="contact"><div className="content-wrap contact-inner"><div className="contact-copy" data-reveal><p className="eyebrow">NEXT MISSION</p><h2>Let’s build<br />something<br />useful.</h2><p>Have an internship, freelance project, or an interesting problem? My inbox is open.</p><a className="button button-light" href="mailto:aynalemsitotaw@gmail.com"><Mail size={15} /> Email me</a></div><div className="contact-card" data-reveal><div className="contact-row"><span>EMAIL</span><a href="mailto:aynalemsitotaw@gmail.com">aynalemsitotaw@gmail.com <ArrowUpRight size={13} /></a></div><div className="contact-row"><span>PHONE</span><a href="tel:+251974102160">+251 974 102 160 <ArrowUpRight size={13} /></a></div><div className="contact-row"><span>LOCATION</span><span>Ethiopia · UTC+3</span></div><div className="social-row"><a href="https://github.com/Ays27" target="_blank" rel="noreferrer"><Github size={14} /> GitHub <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/in/aynalem-sitotaw-tarekegn-3b5511429" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} /></a></div></div></div></section>
    </main>
    <footer className="site-footer"><Logo /><a href="#top">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
