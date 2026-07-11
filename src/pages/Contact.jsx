import { useState } from 'react'
import { LiaLinkedin } from 'react-icons/lia'
import { GrGithub } from 'react-icons/gr'
import { PiXLogo } from 'react-icons/pi'
import '../styles/Contact.css'
import '../pages/App.css'
import Form from '../components/Form'
import ColorBends from './ColorBends'

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <section className="contact">
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
      />
      <title>Contact Us</title>
      <div className="container">
        <div className="contact__inner">

          <h2 className="contact__heading">
            Let's <span>Build</span><br />Something Great.
          </h2>

          <p className="contact__body">
            I'm currently open to internship opportunities and freelance projects.
            Whether you have a project in mind, a job offer, or just want to say hi —
            my inbox is always open!
          </p>

          {/* Say Hello → Form modal open */}
          <button
            className="contact__email-btn"
            onClick={() => setFormOpen(true)}
          >
            Say Hello
          </button>

          {/* Form Modal — controlled from here */}
          <Form isOpen={formOpen} onClose={() => setFormOpen(false)} />

          <div className="contact__social">
            <a
              href="https://github.com/dharmapal25"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon">
                <GrGithub style={{ width: "25px", height: "30px", fill: "#c0c0c0ff" }} />
              </span>
              <span className="contact__social-label">GitHub</span>
            </a>

            <div className="contact__divider" />

            <a
              href="https://www.linkedin.com/in/dharmapal-bharati-5b48b8326/"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon">
                <LiaLinkedin style={{ width: "35px", height: "30px", fill: "#96afffea" }} />
              </span>
              <span className="contact__social-label">LinkedIn</span>
            </a>

            {/* <div className="contact__divider" /> */}

            {/* <a
              href="https://twitter.com/dharmapal"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__social-icon">
                <PiXLogo style={{ width: "25px", height: "30px", fill: "#ddddddff" }} />
              </span>
              <span className="contact__social-label">Twitter</span>
            </a> */}

          </div>

          <p className="contact__footer">
            Designed & Built by{' '}
            <a href="https://github.com/dharmapal25">Dharmapal</a>
            {' '}· 2026
          </p>

        </div>
      </div>
    </section>
  )
}