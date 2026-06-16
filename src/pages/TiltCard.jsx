import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltCard() {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      scale: 1.05,
      glare: true,
      "max-glare": 0.4,
    });

    return () => {
      tiltRef.current?.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div ref={tiltRef} className="card">
        <h2>FlashGPT AI</h2>
        <p>Full Stack Developer</p>
      </div>
    </div>
  );
}