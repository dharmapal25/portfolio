import React from "react";
import Atropos from "atropos/react";
import ColorBends from '../components/Libraries/ColorBends'

import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import Flashpilot from "../../public/project-Image/Flashpilot.png";
import courseBox from "../../public/project-Image/courseBox.png";
import codeEditor from "../../public/project-Image/codeEditor.png";
import os from "../../public/project-Image/os.png";
import pro from "../../public/project-Image/pro.png";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Flashpilot,
      title: "Flashpilot",
      description: "FlashGPT is a full-stack AI chat app that lets you talk to multiple AI models — GPT, Llama, DeepSeek, and Qwen — all in one place. Switch between models anytime without losing context. Every conversation is saved so you can always pick up from where you left off. Login is secured via Google OAuth with JWT session handling and API rate limiting. Chats auto-delete after 30 days and the app is installable on any device as a PWA.",
      tech: ["React JS", "MongoDB", "Node JS", "Express JS", "Groq SDK", "Nodemailer", "JWT", "Google OAuth2", "PWA"],
      github: "https://github.com/dharmapal25/FlashGPT",
      live: "https://flashpilot.vercel.app",
    },
    {
      id: 2,
      image: courseBox,
      title: "Course-Box",
      description: "Course-Box is a full-stack e-learning platform for students and instructors. Students can browse, buy courses via Razorpay, and get instant access after payment. Instructors can upload courses through protected routes with role-based access. Firebase Google Auth handles login, JWT with HTTP-only cookies keeps sessions secure, and ImageKit CDN with lazy loading ensures fast media delivery.",
      tech: ["React JS", "CSS", "Express JS", "Mongo Atlas", "Swiper JS", "Firebase Auth", "Razorpay", "ImageKit", "(RBAC)"],
      github: "https://github.com/dharmapal25/course-box",
      live: "https://course-box.vercel.app",
    },
    {
      id: 3,
      image: codeEditor,
      title: "Code-Editor",
      description: "Flash Code Editor is a browser-based code editor supporting JavaScript, Python, Java, and HTML. Switch languages anytime without losing your code and run it directly in the browser. Code execution runs inside Docker containers — each language gets its own isolated environment so nothing affects the host server. No setup needed — just open and start coding.",
      tech: ["React JS", "Express JS", "Typescript", "Docker", "CSS"],
      github: "https://github.com/dharmapal25/code-editor",
      live: "https://flash-code-editor.onrender.com",
    },
    {
      id: 4,
      image: os,
      title: "Web OS",
      description: "A resource-optimized browser-based operating system simulation. It implements micro-frontend sandboxing for independent app states, concurrent process visualization using optimized DOM rendering, and a lightweight file-system abstraction. The focus is on decoupling application state from the windowing layer to ensure consistent multi-tasking performance in-tab.",
      tech: ["React JS", "imagekit.io", "react-rnd", "DOM", "CSS"],
      github: "https://github.com/dharmapal25/WEB-OS",
      live: "https://flashos.vercel.app",
    },
    {
      id: 5,
      image: pro,
      title: "Portfolio",
      description: "A highly optimized, performant digital architecture showcasing personal milestones. Features include asynchronous module loading, state-driven dynamic routing, and fluid transition orchestration to demonstrate clean architectural principles and asynchronous programming workflows.",
      tech: ["React", "Linus", "Gsap", "React-bits", "CSS"],
      github: "https://github.com/dharmapal25/WEB-OS",
      live: "https://dharmapal.vercel.app/",
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