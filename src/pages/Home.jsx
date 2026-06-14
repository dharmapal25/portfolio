import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="home">
      <div className="home__bg" />
      <div className="home__bg-2" />

      <div className="home__content">

        <p className="home__greeting"><span style={{ color: "#fff", fontSize: "20px" }} ></span></p>

        <h1 className="home__name">
          Turning Ideas Into
          Production -Ready web Applications.<span className="cursor">_</span>
        </h1>

        <h2 className="home__role">
          <span>Full-Stack</span> Developer.
        </h2>

        <p className="home__tagline">
          I build fast, scalable, real-world web apps —
          from pixel-perfect UIs to AI-powered, production-ready backends.
        </p>

        {/* <div className="home__stack">
          {['MERN Stack', 'Socket.IO', 'React', 'Node.js', 'MongoDB', "Rag"].map(t => (
            <span key={t} className="home__stack-pill">{t}</span>
          ))}
        </div> */}

        <div className="home__buttons">
          <button
            className="btn-secondary"
            onClick={() => navigate('/projects')}
          >
            View My Work ↗
          </button>
          <button
            className="btn-primary"
            onClick={() => navigate('/contact')}
          >
            Let's Connect
          </button>
        </div>
      </div>

      <div
        className="home__scroll"
        onClick={() => navigate('/about')}
      >
        <span>Scroll</span>
        <div className="home__scroll-line" />
      </div>
    </main>
  )
}
