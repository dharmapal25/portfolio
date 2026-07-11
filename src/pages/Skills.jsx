import { useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiExpress, SiSocketdotio, SiMongodb,
  SiMysql, SiRedis, SiPython, SiDocker, SiGit,
  SiNumpy, SiLinux,
  SiVercel,
  SiPandas
} from "react-icons/si";
import { TbApi, TbBrandThreejs } from "react-icons/tb";
import { BiData } from "react-icons/bi";
import "../styles/Skills.css";
import ColorBends from "./ColorBends";


// ── SKILLS DATA 
const SKILLS = [
  { name: "Tailwind CSS", cat: "frontend", color: "#06B6D4", Icon: SiTailwindcss },
  { name: "React", cat: "frontend", color: "#61DAFB", Icon: SiReact },
  { name: "JavaScript", cat: "frontend", color: "#F7DF1E", Icon: SiJavascript },
  { name: "HTML & CSS", cat: "frontend", color: "#E34F26", Icon: SiHtml5 },
  { name: "GSAP", cat: "frontend", color: "#88CE02", Icon: TbBrandThreejs },
  { name: "Node.js", cat: "backend", color: "#68A063", Icon: SiNodedotjs },
  { name: "Express.js", cat: "backend", color: "#cccccc", Icon: SiExpress },
  { name: "Socket.IO", cat: "backend", color: "#25C19F", Icon: SiSocketdotio },
  { name: "REST API", cat: "backend", color: "#e07853ff", Icon: TbApi },
  { name: "MongoDB", cat: "database", color: "#47A248", Icon: SiMongodb },
  { name: "MySQL", cat: "database", color: "#4479A1", Icon: SiMysql },
  { name: "Pinecone", cat: "database", color: "#a77fceff", Icon: BiData },
  { name: "Redis", cat: "database", color: "#DC382D", Icon: SiRedis },
  { name: "Python", cat: "tools", color: "#3776AB", Icon: SiPython },
  { name: "Docker", cat: "tools", color: "#2496ED", Icon: SiDocker },
  { name: "Vercel", cat: "tools", color: "#ffffffff", Icon: SiVercel },
  { name: "Git", cat: "tools", color: "#F05032", Icon: SiGit },
  { name: "NumPy", cat: "tools", color: "#4DABCF", Icon: SiNumpy },
  { name: "Linux", cat: "tools", color: "#b6b6b6ff", Icon: SiLinux },
  { name: "Pandas", cat: "tools", color: "#a1a9aaff", Icon: SiPandas },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools" },
];

const INFO = {
  all: { title: "All Skills", desc: "Complete technical stack across frontend, backend, database, and tools." },
  frontend: { title: "Frontend", desc: "Building fast, responsive UIs with React, animations, and modern CSS." },
  backend: { title: "Backend", desc: "Server-side development with Node.js, Express, and real-time Socket.IO." },
  database: { title: "Database", desc: "Relational, NoSQL, and vector databases for scalable data storage." },
  tools: { title: "Tools & Languages", desc: "Dev tools, scripting, containerization, and data science libraries." },
};

// ── HELPERS 
function fibSphere(n) {
  const pts = [], phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), t = phi * i;
    pts.push({ x: Math.cos(t) * r, y, z: Math.sin(t) * r });
  }
  return pts;
}

function hexRgb(h) {
  return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
}

function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ── COMPONENT 
export default function SkillsGlobe() {
  const canvasRef = useRef(null);
  const stateRef = useRef({ rotX: 0.3, rotY: 0, drag: false, lmx: 0, lmy: 0 });
  const iconImagesRef = useRef({});           // ← loaded icon Image objects
  const panelTitleRef = useRef(null);
  const panelCountRef = useRef(null);
  const panelDescRef = useRef(null);
  const pillsRef = useRef(null);

  // ── LOAD REACT-ICONS AS CANVAS IMAGES ──────────────────────────────────
  useEffect(() => {
    SKILLS.forEach(({ name, color, Icon }) => {
      try {
        const svg = renderToStaticMarkup(<Icon color={color} size={14} />);
        const dataURL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
        const img = new Image();
        img.src = dataURL;
        iconImagesRef.current[name] = img;
      } catch (_) { /* icon not critical */ }
    });
  }, []);

  // ── CANVAS GLOBE ────────────────────────────────────────────────────────
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");

    // ↓↓ GLOBE SIZE — change W, H, R here ↓↓
    const W = cv.width, H = cv.height;
    const CX = W / 2, CY = H / 2;
    const R = 200;   // ← sphere radius (was 115)
    const FOV = 420;
    const SEGS = 64;
    const pts = fibSphere(SKILLS.length);
    const SP = SKILLS.map((s, i) => ({ ...s, ...pts[i] }));
    const st = stateRef.current;

    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 0.9, a: Math.random() * 0.35,
    }));

    function proj(x, y, z) {
      const cx = Math.cos(st.rotX), sx = Math.sin(st.rotX);
      const y1 = y * cx - z * sx, z1 = y * sx + z * cx;
      const cy = Math.cos(st.rotY), sy = Math.sin(st.rotY);
      const x2 = x * cy + z1 * sy, z2 = -x * sy + z1 * cy;
      const sc = FOV / (FOV + z2 * R);
      return { px: CX + x2 * R * sc, py: CY + y1 * R * sc, z: z2, sc };
    }

    function wireframe() {
      for (let lat = -75; lat <= 75; lat += 15) {
        const ry = Math.sin(lat * Math.PI / 180), rr = Math.cos(lat * Math.PI / 180);
        ctx.beginPath(); let f = true;
        for (let i = 0; i <= SEGS; i++) { const a = (i / SEGS) * Math.PI * 2, p = proj(rr * Math.cos(a), ry, rr * Math.sin(a)); f ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py); f = false; }
        ctx.strokeStyle = "#7ca7b9ff"; ctx.lineWidth = 0.6; ctx.stroke();
      }
      for (let lng = 0; lng < 180; lng += 15) {
        const ang = lng * Math.PI / 180;
        ctx.beginPath(); let f = true;
        for (let i = 0; i <= SEGS; i++) { const a = (i / SEGS) * Math.PI * 2, rr = Math.cos(a), p = proj(rr * Math.cos(ang), Math.sin(a), rr * Math.sin(ang)); f ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py); f = false; }
        ctx.strokeStyle = "#7ca7b9ff"; ctx.lineWidth = 0.6; ctx.stroke();
      }
    }

    let rafId;

    function draw() {

      // IMPORTANT
      ctx.clearRect(0, 0, W, H);

      // Remove stars if you want fully transparent background
      // stars.forEach(s => {
      //   ctx.beginPath();
      //   ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      //   ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      //   ctx.fill();
      // });

      wireframe();

      const rendered = SP
        .map(s => {
          const p = proj(s.x, s.y, s.z);
          return { ...s, ...p };
        })
        .sort((a, b) => a.z - b.z);

      rendered.forEach(s => {
        const opa = Math.max(
          0.07,
          Math.min(0.95, (s.z + 1) / 2 * 0.88 + 0.07)
        );

        const fs = Math.round(
          Math.max(8, 10 * Math.max(1, s.sc))
        );

        const iconSize = Math.round(fs * 3);

        const gap = Math.round(4 * s.sc);
        const pad = Math.round(8 * s.sc);

        ctx.font = `${fs}px DM Sans, sans-serif`;

        const tw = ctx.measureText(s.name).width;

        const iconImg = iconImagesRef.current[s.name];

        const hasIcon =
          iconImg &&
          iconImg.complete &&
          iconImg.naturalWidth > 0;

        const contentW =
          (hasIcon ? iconSize + gap : 0) + tw;

        const pw = contentW + pad * 3;

        const ph = Math.max(
          iconSize + pad,
          Math.round(19 * s.sc)
        );

        const rx = s.px - pw / 2;
        const ry = s.py - ph / 2;
        const rr = ph / 2;

        ctx.globalAlpha = opa;

        rrect(ctx, rx, ry, pw, ph, rr);

        const [rv, gv, bv] = hexRgb(s.color);

        ctx.fillStyle = `rgba(${rv},${gv},${bv},0.1)`;
        ctx.fill();

        ctx.strokeStyle = `rgba(${rv},${gv},${bv},0.45)`;
        ctx.lineWidth = 0.7;
        ctx.stroke();

        let textStartX = rx + pad;

        if (hasIcon) {
          ctx.drawImage(
            iconImg,
            rx + pad,
            s.py - iconSize / 2,
            iconSize,
            iconSize
          );

          textStartX =
            rx + pad + iconSize + gap;
        }

        ctx.fillStyle = "#fff";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        ctx.fillText(
          s.name,
          textStartX,
          s.py
        );

        ctx.globalAlpha = 1;
      });

      if (!st.drag) {
        st.rotY += 0.003;
      }

      rafId = requestAnimationFrame(draw);
    }

    draw();

    const onDown = e => { st.drag = true; st.lmx = e.clientX; st.lmy = e.clientY; };
    const onMove = e => { if (!st.drag) return; st.rotY += (e.clientX - st.lmx) * 0.006; st.rotX += (e.clientY - st.lmy) * 0.006; st.lmx = e.clientX; st.lmy = e.clientY; };
    const onUp = () => { st.drag = false; };
    const onTD = e => { st.drag = true; st.lmx = e.touches[0].clientX; st.lmy = e.touches[0].clientY; };
    const onTM = e => { if (!st.drag) return; st.rotY += (e.touches[0].clientX - st.lmx) * 0.006; st.rotX += (e.touches[0].clientY - st.lmy) * 0.006; st.lmx = e.touches[0].clientX; st.lmy = e.touches[0].clientY; };

    cv.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    cv.addEventListener("touchstart", onTD, { passive: true });
    window.addEventListener("touchmove", onTM, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      cancelAnimationFrame(rafId);
      cv.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  // ── PANEL UPDATE ────────────────────────────────────────────────────────
  function updatePanel(cat) {
    const filtered = cat === "all" ? SKILLS : SKILLS.filter(s => s.cat === cat);
    const info = INFO[cat];
    if (panelTitleRef.current) panelTitleRef.current.textContent = info.title;
    if (panelCountRef.current) panelCountRef.current.textContent = `${filtered.length} skills`;
    if (panelDescRef.current) panelDescRef.current.textContent = info.desc;
    if (pillsRef.current) {
      pillsRef.current.innerHTML = filtered.map(s => {
        const [r, g, b] = hexRgb(s.color);
        return `<span class="sg-pill" style="border-color:rgba(${r},${g},${b},0.35);">${s.name}</span>`;
      }).join("");
    }
    document.querySelectorAll(".sg-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.cat === cat);
    });
  }

  useEffect(() => { updatePanel("all"); }, []);

  // ── JSX ──────────────────────────────────────────────────────────────────
  return (
    <section className="sg-section" id="skills">
      <title>Dharmapal | Skills</title>

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

      <h2 className="sg-heading">Technical Expertise</h2>

      {/* ↓↓ GLOBE SIZE — change width & height here ↓↓ */}
      {/* <canvas ref={canvasRef} className="sg-canvas" width={850} height={620} /> */}
      <canvas ref={canvasRef} className="sg-canvas" width={800} height={600} />
      <p className="sg-drag-hint">⊕ Drag to rotate</p>

      <div className="sg-tabs">
        {TABS.map(t => (
          <button key={t.key} className="sg-tab" data-cat={t.key} onClick={() => updatePanel(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="sg-panel">
        <div className="sg-panel-header">
          <span className="sg-panel-title" ref={panelTitleRef}>All Skills</span>
          <span className="sg-panel-count" ref={panelCountRef}>19 skills</span>
        </div>
        <p className="sg-panel-desc" ref={panelDescRef} />
        <div className="sg-pills" ref={pillsRef} />

      </div>
    </section>
  );
}