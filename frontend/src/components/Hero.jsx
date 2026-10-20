import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, resumeUrl } from '../data/portfolio.js';

const ROTATING = [
  'object detection / YOLO26 / Detectron2',
  'annotation pipelines / CVAT / data quality',
  'backend systems / Django REST / workflows',
  'analytics / Apache Superset / SQL',
];

function useRotator(lines, holdMs = 2800) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % lines.length), holdMs);
    return () => clearInterval(t);
  }, [lines.length, holdMs]);
  return lines[i];
}

function useIST() {
  const [now, setNow] = useState('');
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
        hour12: false,
      }).format(new Date());
    setNow(fmt());
    const t = setInterval(() => setNow(fmt()), 30000);
    return () => clearInterval(t);
  }, []);
  return now;
}

// Animated oscilloscope trace — a live-looking signal readout.
function Scope() {
  const [points, setPoints] = useState(() => Array.from({ length: 60 }, () => 18 + Math.random() * 4));
  useEffect(() => {
    const id = setInterval(() => {
      setPoints((prev) => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        const drift = (Math.random() - 0.5) * 9;
        const pull = (18 - last) * 0.22;
        next.push(Math.max(4, Math.min(40, last + drift + pull)));
        return next;
      });
    }, 90);
    return () => clearInterval(id);
  }, []);
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${i * 3.4},${p.toFixed(1)}`).join(' ');
  return (
    <div>
      <svg className="scope" viewBox="0 0 200 44" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="scopeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${d} L200,44 L0,44 Z`} fill="url(#scopeFill)" />
        <path d={d} fill="none" stroke="currentColor" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="scope-label">
        <span>CH1 · inference trace</span>
        <span>12.97°N 77.59°E</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const line = useRotator(ROTATING);
  const ist = useIST();
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="hero-eyebrow">
            <span className="led" />
            <span>Bengaluru, India {ist ? `· ${ist} IST` : ''}</span>
            <span>·</span>
            <span>Open to opportunities</span>
          </div>

          <h1>
            <span className="dim">Prajwal S</span>
            <br />
            <span className="acc">Computer Vision</span>
            <span className="dim"> + </span>
            <span className="acc">Backend</span>
            <br />
            <span className="dim">+ Data Systems</span>
          </h1>
          <h2>Software Engineer</h2>

          <p className="hero-sub">
            I build production machine-learning systems end to end —{' '}
            <b>YOLO26 / Detectron2</b> inspection pipelines, <b>CVAT</b> annotation
            workflows, the <b>backend for the AIMS ticket management system</b>, and
            analytics dashboards with measurable operational impact.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="#projects">Selected Work</a>
            <a className="btn" href="#contact">Contact</a>
            <a className="btn" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
          </div>

          <div className="hero-stats">
            {profile.stats.map((s) => (
              <div className="cell" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-meta">
            <span className="m">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
            <span className="m">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/prajwal-s</a>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="instrument">
            <div className="instrument-bar">
              <span className="led" />
              <span>AIMS · inference pipeline</span>
              <span style={{ marginLeft: 'auto' }}>LIVE</span>
            </div>
            <div className="instrument-body">
              <div className="crt">
                <pre>
                  <span className="tok-c"># production asset inspection</span>{'\n'}
                  <span className="tok-k">from</span> ultralytics <span className="tok-k">import</span> YOLO{'\n\n'}
                  model = YOLO(<span className="tok-s">'yolo26m.pt'</span>){'\n'}
                  results = model.predict({'\n'}
                  {'    '}source=<span className="tok-s">'assets/'</span>, conf=<span className="tok-v">0.45</span>){'\n\n'}
                  <span className="tok-c"># +30% faster · -15% turnaround</span>{'\n'}
                  deploy(model, target=<span className="tok-s">'production'</span>) <span className="tok-v">[OK]</span>
                </pre>
              </div>

              <Scope />

              <div className="spec-table">
                <div className="row">
                  <span className="k">Stack</span>
                  <span className="v">YOLO26 · Detectron2 · PyTorch</span>
                </div>
                <div className="row">
                  <span className="k">Backend</span>
                  <span className="v">Django · DRF · PostgreSQL</span>
                </div>
                <div className="row">
                  <span className="k">Data</span>
                  <span className="v">CVAT · Superset · SQL</span>
                </div>
                <div className="row">
                  <span className="k">Status</span>
                  <span className="v" style={{ color: 'var(--phos)' }}>● Deployed</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
