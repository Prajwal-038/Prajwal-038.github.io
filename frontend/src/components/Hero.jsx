import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, resumeUrl } from '../data/portfolio.js';

const ROTATING = [
  'Production object detection · YOLO26 · Detectron2',
  'Annotation pipelines · CVAT · data quality',
  'Backend systems · Django REST · ticket workflows',
  'Analytics platforms · Apache Superset · SQL',
];

function useRotator(lines, holdMs = 2600) {
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
      }).format(new Date());
    setNow(fmt());
    const t = setInterval(() => setNow(fmt()), 30000);
    return () => clearInterval(t);
  }, []);
  return now;
}

export default function Hero() {
  const line = useRotator(ROTATING);
  const ist = useIST();
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="eyebrow">
            <span className="live-dot" />
            Bengaluru, India {ist ? `· ${ist} IST` : ''} · Open to opportunities
          </span>
          <h1>
            Prajwal S.
            <br />
            I build <span className="italic">computer vision</span> systems for{' '}
            <span className="underline-sketch">
              production.
              <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 14 C 60 4, 140 4, 196 12" fill="none" stroke="#bc4a15" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="hero-sub">
            Software Engineer at <b>Compviz Technologies</b> specializing in production
            computer vision and data platforms — <b>YOLO26 / Detectron2</b> inspection
            pipelines, CVAT annotation systems, the <b>backend for the AIMS ticket
            management system</b>, and analytics dashboards with measurable business impact.
          </p>
          <div className="typing">
            <span>✎ {line}</span>
            <span className="caret">▌</span>
          </div>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">View selected work</a>
            <a className="btn btn-ghost" href="#contact">Contact</a>
            <span className="hand-note">response within 48 hours</span>
          </div>
          <div className="hero-meta">
            <a className="btn btn-ghost btn-sm" href={`mailto:${profile.email}`}>Mail</a>
            <a className="btn btn-ghost btn-sm" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-ghost btn-sm" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="desk-card">
            <div className="id-row">
              <div className="avatar">P</div>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.1 }}>
                  Prajwal S
                </div>
                <div className="mono" style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                  Software Engineer · Computer Vision & Data
                </div>
                <div style={{ marginTop: 8 }}>
                  <span className="stamp">Production experience</span>
                </div>
              </div>
            </div>
            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot" style={{ background: '#e0685c' }} />
                <span className="dot" style={{ background: '#e8b93e' }} />
                <span className="dot" style={{ background: '#5fae7e' }} />
                <span style={{ marginLeft: 8 }}>aims — production inference pipeline</span>
              </div>
              <pre>
                <span className="tok-c"># asset inspection pipeline</span>{'\n'}
                <span className="tok-k">from</span> ultralytics <span className="tok-k">import</span> YOLO{'\n\n'}
                model = YOLO(<span className="tok-s">'yolo26m.pt'</span>){'\n'}
                results = model.predict(source=<span className="tok-s">'assets/'</span>, conf=<span className="tok-v">0.45</span>){'\n\n'}
                <span className="tok-c"># +30% faster · −15% turnaround · −25% labeling</span>{'\n'}
                deploy(model, target=<span className="tok-s">'production'</span>)  <span className="tok-v">✓</span>
              </pre>
            </div>
            <div className="field-notes">
              {profile.stats.map((s) => (
                <div className="note" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="doodle-arrow" style={{ marginTop: 10 }}>
              ↳ Metrics from production deployments
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
