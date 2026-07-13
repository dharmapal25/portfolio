import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import Threads from './Threads'


export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="home">

<div style={{ width: '100%', height: '600px', position: 'absolute',top : "10%" }}>
  <Threads
    amplitude={1}
    distance={0.3}
    enableMouseInteraction
    
  />
</div>


      <div className="home__content">

        <p className="home__greeting"><span style={{ color: "#fff", fontSize: "20px" }} ></span></p>

        <h1 className="home__name">
          Turning Ideas Into Production -Ready{' '}
          <span className="web-tag">
            <span className="web-tag__bracket">&lt;</span>
            <span className="web-tag__text">Web</span>
            <span className="web-tag__bracket">/&gt;</span>
          </span>{' '}
          Applications.<span className="cursor">_</span>
        </h1>

        <h2 className="home__role">
          <span>Full-Stack</span> Developer.
        </h2>

        <p className="home__tagline">
          I build fast, scalable, real-world web apps —
          from pixel-perfect UIs to AI-powered, production-ready backends.
        </p>


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

    </main>
  )
}