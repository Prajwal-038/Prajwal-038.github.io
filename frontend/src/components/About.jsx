import { motion } from 'framer-motion';
import { about } from '../data/portfolio.js';

// Section 01 — operating principles and focus areas.
export default function About() {
  return (
    <section className="section container" id="about">
      <div className="sec-head">
        <span className="sec-idx">01</span>
        <h2 className="sec-title">About</h2>
        <span className="sec-rule" />
      </div>
      <p className="sec-sub">
        I work across the full lifecycle of applied AI systems — dataset design, model training
        and evaluation, backend development, deployment, and monitoring. The emphasis is
        reliability under real conditions: variable lighting, imperfect labels, operational
        constraints, and requirements that arrive on a schedule.
      </p>
      {about.paragraphs.map((p, i) => (
        <p className="sec-sub" key={i} style={{ marginBottom: 10 }}>{p}</p>
      ))}

      <div className="grid-4" style={{ marginTop: 26 }}>
        {about.highlights.map((h, i) => (
          <motion.div
            className="module"
            key={h.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <div className="module-head">
              <span className="module-idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="led" />
            </div>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="panel" style={{ marginTop: 18, padding: 20 }}>
        <div className="module-head">
          <span className="module-idx">Profile</span>
          <span className="sec-rule" />
        </div>
        <p style={{ color: 'var(--ink-2)', margin: 0, fontSize: 12.5 }}>
          Based in Bengaluru, India. Software Engineer at Compviz Technologies working across
          computer vision, backend development, and data analytics. B.E. in Artificial
          Intelligence and Data Science with three peer-reviewed publications. Available for
          roles, collaborations, and applied research engagements.
        </p>
      </div>
    </section>
  );
}
