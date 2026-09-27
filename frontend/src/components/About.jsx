import { motion } from 'framer-motion';
import { about } from '../data/portfolio.js';

// First-person, opinionated, with a life outside the terminal.
export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-kicker">01 · About</p>
        <h2 className="section-title">
          Focused on <em>production-ready systems.</em>
        </h2>
        <p className="section-sub">
          I work on the full lifecycle of applied AI systems — dataset design, model training
          and evaluation, backend development, deployment, and monitoring. My emphasis is on
          reliability under real-world conditions: varying lighting, imperfect labels,
          operational constraints, and stakeholder requirements.
        </p>
        {about.paragraphs.map((p, i) => (
          <p className="section-sub" key={i} style={{ marginBottom: 12, fontSize: '0.98rem' }}>{p}</p>
        ))}
        <p className="scribble">Areas of focus —</p>
        <div className="grid-4" style={{ marginTop: 14 }}>
          {about.highlights.map((h, i) => (
            <motion.div
              className="card" key={h.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="card highlight-card" style={{ marginTop: 20 }}>
          <div className="meta-line">Professional background —</div>
          <p style={{ margin: '8px 0 0' }}>
            Based in Bengaluru, India. Software Engineer at Compviz Technologies working across
            computer vision, backend development, and data analytics. B.E. in Artificial
            Intelligence & Data Science with three peer-reviewed publications. I welcome
            inquiries regarding roles, collaborations, and applied research.
          </p>
        </div>
      </div>
    </section>
  );
}
