import '../styles/About.css'
import '../pages/App.css'
import photo from "../../public/assets/Jod.png"
import Timeline from '../components/Timeline'
import ColorBends from './ColorBends'
const facts = [
  'LIT Lucknow — B.Tech CSE',
  '2nd Year Student',
  'Lucknow, India',
  " Always building something new"
]

export default function About() {
  return (
    <section className="about">
      <title>Dharmapal | About</title>
      
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
      <div className="container">
        <div className="about__inner">

          <h2 className="section-title">Who I <span>Am</span></h2>
          <div className="section-divider" />

          <div className="about__grid">

            <div className="about__text">
              
              <p>
                I'm <strong>Dharmapal</strong>, a 2nd-year Computer Science student at{' '}
                <span className="accent">LIT Lucknow</span> who'd rather build than just
                study theory. I enjoy turning ideas into real, working products that
                solve actual problems — not just textbook projects.
              </p>
              <p>
                My core stack is <strong>MERN</strong> (MongoDB, Express, React, Node.js),
                and I love building everything end-to-end — real-time chat apps, task
                managers, and interactive UIs. I also have a keen eye for clean design
                and smooth, intuitive user experiences.
              </p>

              <div className="about__facts">
                {facts.map(fact => (
                  <div key={fact} className="about__fact">{fact}</div>
                ))}
              </div>
            </div>

            <div className="about__photo-wrap">
              <div className="about__photo-frame">
                <div className="about__photo-placeholder">
                    <img src={photo} draggable="false" />
                </div>
              </div>
            </div>

          </div>

          {/* Achievement section hackathons, interships */}
          <Timeline />
        </div>
      </div>
    </section>
  )
}