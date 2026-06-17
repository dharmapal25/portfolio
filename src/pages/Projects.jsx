import React from "react";
import "../styles/Projects.css";
import pro from "../../public/pro.png";
import ChatRoom from "../../public/image.png";
import os from "../../public/os.png";
import FlashGPT from "../../public/FlashGPT.png";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Atropos from "atropos/react";
import ColorBends from "./ColorBends";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: ChatRoom,
      title: " ChatRoom",
      description: "Create private rooms, invite your people, and chat in real-time — instant delivery with secure JWT auth and PWA offline support.",
      tech: ["React JS", "MongoDB", "Node JS", "Express JS", "Socket.io", "Nodemailer", "JWT", "Axios"],
      github: "https://github.com/dharmapal25/ChatRoom",
      live: "chatroom-hub.vercel.app/",
    },
    {
      id: 2,
      image: FlashGPT,
      title: "FlashGPT",
      description: "An AI assistant that actually remembers you — recalls past conversations to give smarter, context-aware responses every time.",
      tech: ["Groq", "RAG", "Gemini API", "React JS", "Express JS", "MongoDB", "Pinecone", "Google-Auth"],
      github: "https://github.com/dharmapal25/FlashGPT",
      live: "flashgpt-ai.vercel.app/",
    },
    {
      id: 3,
      image: os,
      title: "Web OS",
      description: "A fully functional OS experience in your browser — drag windows, multitask, and resize — all inside a tab.",
      tech: ["React JS", "imagekit.io", "react-rnd", "DOM", "CSS"],
      github: "https://github.com/dharmapal25/FlashGPT",
      live: "flashgpt-ai.vercel.app/",
    },
    {
      id: 4,
      image: pro,
      title: "Portfolio",
      description: "The site you're on right now — showcasing my journey, projects, and skills as a full-stack developer.",
      tech: ["React", "Linus", "Gsap", "React-bits", "CSS"],
      github: "https://github.com/dharmapal25/WEB-OS",
      live: "https://flashos.vercel.app/",
    },

  ];

  return (
    <>
      <div className="main-container">

<title>Dharmapal | Projects</title>

        <section className="projects-section" id="projects">

          <ColorBends
            colors={["#1b1b1bff", "#000000ff"]}
            rotation={73}
            speed={0.4}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={0.75}
            noise={0}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={4.5}
            transparent
            autoRotate={0}
          // color="#342e2a"
          />
          <div className="projects-header">
            <h2>Featured Projects</h2>
            <p>
              Full Stack, AI, Real-Time Applications and Data Engineering Projects.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <Atropos
                key={project.id}
                className="project-atropos"
                shadowScale={1.05}
                activeOffset={35}
                rotateXMax={12}
                rotateYMax={12}
                highlight={true}
              >
                <article className="project-card">
                  <div
                    className="project-image"
                    data-atropos-offset="1"
                  >
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div
                    className="project-content"
                    data-atropos-offset="2" // 10
                  >
                    <h3 data-atropos-offset="2">
                      {project.title}
                    </h3>

                    <p data-atropos-offset="2">
                      {project.description}
                    </p>

                    <div
                      className="project-tags"
                      data-atropos-offset="2"
                    >
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <hr />
                    <div
                      className="project-links"
                      // data-atropos-offset="1"
                    >

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="links"
                      >
                        <BsGithub />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="links"
                      >
                        <BiLinkExternal />
                      </a>
                    </div>
                  </div>
                </article>
              </Atropos>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;