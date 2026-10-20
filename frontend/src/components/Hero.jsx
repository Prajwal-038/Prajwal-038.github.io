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

const SYSTEMS = [
  { name: 'AIMS', desc: 'Computer vision inspection', stack: 'YOLO26 / Detectron2' },
  { name: 'KFEANS', desc: 'Analytics dashboards', stack: 'Apache Superset' },
  { name: 'Tickets', desc: 'Workflow backend', stack: 'Django REST' },
];

const IMPACT = [
  { value: '+30%', label: 'Inference speed' },
  { value: '−15%', label: 'Turnaround time' },
  { value: '−25%', label: 'Labeling effort' },
  { value: '+35%', label: 'Actionable insight' },
];

const PIPELINE = [
  { id: '01', label: 'Dataset', note: 'sampling' },
  { id: '02', label: 'Annotate', note: 'CVAT' },
  { id: '03', label: 'Train', note: 'YOLO26' },
  { id: '04', label: 'Serve', note: 'Django' },
  { id: '05', label: 'Monitor', note: 'Superset' },
];

// How delivered work actually flows — a static schematic, no motion.
function Flow() {
  return (
    <div className="panel-block">
      <div className="block-label">Delivery path</div>
      <div className="flow">
        {PIPELINE.map((s) => (
          <div className="flow-step" key={s.id}>
            <b>{s.label}</b>
            <span>{s.note}</span>
          </div>
        ))}
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
            <a className="btn btn-solid" href="#projects">Projects</a>
            <a className="btn" href="#contact">Contact</a>
            <a className="btn" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
          </div>

          <div className="focus-strip">
            <span className="focus-label">Focus</span>
            <span>Computer Vision</span>
            <span>Backend &amp; APIs</span>
            <span>Data Analytics</span>
            <span>MLOps</span>
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
              <span>Systems I work on</span>
              <span style={{ marginLeft: 'auto' }}>Compviz</span>
            </div>
            <div className="instrument-body">
              <div className="sys-list">
                {SYSTEMS.map((s) => (
                  <div className="sys-row" key={s.name}>
                    <span className="sys-name">{s.name}</span>
                    <span className="sys-dots" />
                    <span className="sys-desc">{s.desc}</span>
                    <span className="sys-stack">{s.stack}</span>
                  </div>
                ))}
              </div>

              <div className="panel-block">
                <div className="block-label">Measured impact</div>
                <div className="impact-grid">
                  {IMPACT.map((m) => (
                    <div className="impact" key={m.label}>
                      <b>{m.value}</b>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Flow />

              <div className="avail">
                <span className="led" />
                <span>Open to opportunities</span>
                <span className="avail-note">Response within 48h</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
