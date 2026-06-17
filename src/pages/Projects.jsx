import React from "react";
import "../styles/Projects.css";
import project_1 from "../../public/tanjiro.jpg";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Atropos from "atropos/react";
import ColorBends from "./ColorBends";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: project_1,
      title: "MERN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolor id qui eligendi cum beatae placeat facilis consequuntur.",
      tech: ["React", "MongoDB", "Pinecone", "Express"],
      github: "https://github.com/dharmapal25",
      live: "https://github.com/dharmapal25",
    },
    {
      id: 2,
      image: project_1,
      title: "AI Chat App",
      description:
        "Real-time AI chat application with authentication and chat history.",
      tech: ["React", "Node", "MongoDB", "Socket.io"],
      github: "https://github.com/dharmapal25",
      live: "https://github.com/dharmapal25",
    },
    {
      id: 3,
      image: project_1,
      title: "Task Manager",
      description:
        "Full-stack productivity application inspired by Trello.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      github: "https://github.com/dharmapal25",
      live: "https://github.com/dharmapal25",
    },

  ];

  return (
    <>
      <div className="main-container">


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

                    <p data-atropos-offset="4">
                      {project.description}
                    </p>

                    <div
                      className="project-tags"
                      data-atropos-offset="4"
                    >
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div
                      className="project-links"
                      data-atropos-offset="1"
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