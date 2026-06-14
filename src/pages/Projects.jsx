import { GrDomain, GrGithub } from 'react-icons/gr'
import '../styles/Projects.css'
import { BiGlobe } from 'react-icons/bi'

const featured = {
  title: 'Chat-Room Hub (Real-time Chat) ',
  desc: 'Built a full-stack real-time chat platform where users can create and join public or private rooms with owner controlled access. Engineered with Socket.IO for live messaging, JWT + Redis-backed rate limiting for security, and shipped as a PWA for mobile install.',
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
  emoji: '💬 ',
  github: 'https://github.com/dharmapal25/ChatRoom',
  live: 'https://chatroom-hub.vercel.app/',
}

const projects = [
  {
    title: 'Flash OS - (Web Operating System)',
    desc: 'Built a macOS-inspired Web OS in React with draggable/resizable windows, built-in apps like Notepad, Terminal, Music and more, persistent themes & wallpapers, and a responsive UI with macOS-style dock.',
    tech: ['React', 'react-rnd', "css"],
    emoji: '📋',
    github: 'https://github.com/dharmapal25',
    live: 'https://flashos.vercel.app/',
  },
  {
    title: 'FlashGPT',
    desc: 'Built an AI-powered assistant using RAG: ingests docs, indexes embeddings with Pinecone, queries an LLM for context-aware answers, stores chat history in MongoDB, and provides a React + Express UI for seamless conversational search.',
    tech: ['React', 'Express', "MongoDB", "Rag", "Pinecone", "LLM"],
    emoji: '📋',
    github: 'https://github.com/dharmapal25/AI-and-RAG',
    live: 'https://flashgpt-ai.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section className="projects">
      <title>Dharmapal | Projects</title>
      <div className="container" style={{ width: '100%', paddingTop: '30px', paddingBottom: '100px' }}>

        {/* SECTION HEADER */}
        {/* <p className="section-label">03. Projects</p> */}
        <h2 className="section-title">Things I've <span>Built</span></h2>
        <div className="section-divider" />

        <div className="projects__featured">
          <div className="projects__featured-img">
            <div className="project-img-placeholder">{featured.emoji}</div>
          </div>

          <div className="projects__featured-info">
            <p className="projects__featured-label">⭐ Featured Project</p>
            <h3 className="projects__featured-title">{featured.title}</h3>

            <div className="projects__featured-desc">
              {featured.desc}
            </div>

            <div className="projects__tech-row">
              {featured.tech.map(t => (
                <span key={t} className="projects__tech">{t}</span>
              ))}
            </div>

            <div className="projects__links">
              <a href={featured.github} className="projects__link" target="_blank" rel="noopener noreferrer" title="GitHub">
                <GrGithub />
              </a>
              <a href={featured.live} className="projects__link" target="_blank" rel="noopener noreferrer" title="Live Demo">
                <BiGlobe />
              </a>
            </div>
          </div>
        </div>

        {/* ── OTHER PROJECTS ── */}
        <p className="projects__others-label">Other Notable Projects</p>

        <div className="projects__grid">
          {projects.map(project => (
            <div className="project-card" key={project.title}>
              <div className="project-card__top">
                <span className="project-card__folder">{project.emoji}</span>
                <div className="project-card__links">
                  <a href={project.github} className="project-card__icon-link" target="_blank" rel="noopener noreferrer">
                    <GrGithub />
                  </a>
                  <a href={project.live} className="project-card__icon-link" target="_blank" rel="noopener noreferrer">
                    <BiGlobe />
                  </a>
                </div>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.desc}</p>
              <div className="project-card__tech">
                {project.tech.map((t, i) => (
                  <span key={t}>
                    {t}{i < project.tech.length - 1 ? <>&nbsp;&nbsp;</> : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
