import React from 'react'
import "../styles/Projects.css"
import project_1 from "../../public/tanjiro.jpg"
const Projects = () => {

  let projects = [
    {
      id: 1,
      image: project_1,
      title: "MERN",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolor id qui eligendi cum beatae placeat facilis consequuntur, dolorum perferendis explicabo excepturi amet nulla delectus eaque odit. Repudiandae, molestias iste.',
      tech: ["react", "mongoDB", "pincone", "express"],
      github: "https://github.com/dharmapal25",
      live: "https://github.com/dharmapal25"
    },
    {
      id: 2,
      image: project_1,
      title: "MERN",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolor id qui eligendi cum beatae placeat facilis consequuntur, dolorum perferendis explicabo excepturi amet nulla delectus eaque odit. Repudiandae, molestias iste.',
      tech: ["react", "mongoDB", "pincone", "express"],
      github: "https://github.com/dharmapal25",
      live: "https://github.com/dharmapal25"

    }
  ]


  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <span>Selected Work</span>
        <h2>Featured Projects</h2>
        <p>
          Full Stack, AI, Real-Time Applications and Data Engineering Projects.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github}>Code</a>
                <a href={project.live}>Live</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects