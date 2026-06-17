import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lenis from "lenis";
import "./pages/App.css"

const lenis = new Lenis({
  duration: 2.5,      // jitna zyada, utna smooth
  lerp: 0.05,         // lower = smoother
  smoothWheel: true,
  wheelMultiplier: 0.8,
  touchMultiplier: 1.5,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);