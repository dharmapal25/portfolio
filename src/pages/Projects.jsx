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
      description: "A scalable, state-persistent real-time communication platform engineered for sub-100ms message delivery. Features include WebSocket multiplexing, distributed room state management, and optimized stateless authentication via JWT. The system minimizes network overhead using binary payloads and maintains fluid message sync across clients.",
      tech: ["React JS", "MongoDB", "Node JS", "Express JS", "Socket.io", "Nodemailer", "JWT", "Axios"],
      github: "https://github.com/dharmapal25/ChatRoom",
      live: "chatroom-hub.vercel.app/",
    },
    {
      id: 2,
      image: FlashGPT,
      title: "FlashGPT",
      description: "A full-stack AI conversational platform utilizing custom RAG (Retrieval-Augmented Generation) pipelines for persistent long-term memory. The system manages multi-dimensional semantic lookup using high-dimensional vector embeddings, dynamically refreshing user context to deliver zero-shot, highly relevant responses. Focus on vector DB optimization and latency-sensitive inference.",
      tech: ["Groq", "RAG", "Gemini API", "React JS", "Express JS", "MongoDB", "Pinecone", "Google-Auth"],
      github: "https://github.com/dharmapal25/FlashGPT",
      live: "flashgpt-ai.vercel.app/",
    },
    {
      id: 3,
      image: os,
      title: "Web OS",
      description: "A resource-optimized browser-based operating system simulation. It implements micro-frontend sandboxing for independent app states, concurrent process visualization using optimized DOM rendering, and a lightweight file-system abstraction. The focus is on decoupling application state from the windowing layer to ensure consistent multi-tasking performance in-tab.",
      tech: ["React JS", "imagekit.io", "react-rnd", "DOM", "CSS"],
      github: "https://github.com/dharmapal25/FlashGPT",
      live: "flashgpt-ai.vercel.app/",
    },
    {
      id: 4,
      image: pro,
      title: "Portfolio",
      description: "A highly optimized, performant digital architecture showcasing personal milestones. Features include asynchronous module loading, state-driven dynamic routing, and fluid transition orchestration to demonstrate clean architectural principles and asynchronous programming workflows.",
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
            {/* <p>
              Full Stack, AI and Real-Time Applications.
            </p> */}
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