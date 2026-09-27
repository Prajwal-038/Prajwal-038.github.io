import { motion } from 'framer-motion';
import { education, certifications } from '../data/portfolio.js';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-kicker">06 · Education</p>
        <h2 className="section-title">Education <em>and certifications.</em></h2>
        <p className="section-sub" style={{ marginBottom: 28 }}>Academic foundation in artificial intelligence and data science, complemented by applied research and professional certifications.</p>
        <div className="grid-2">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4 }}
          >
            <div className="icon">✎</div>
            <h3>{education.degree}</h3>
            <div className="meta-line">
              {education.school} · {education.period}
            </div>
            <div className="pills"><span className="pill cy">{education.cgpa}</span></div>
            <ul style={{ color: 'var(--muted)', fontSize: '0.92rem', paddingLeft: 18 }}>
              {education.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </motion.div>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="icon">★</div>
            <h3>Professional certifications</h3>
            <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
              {certifications.map((c) => (
                <div key={c.title} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: '1.3rem' }}>{c.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.93rem' }}>{c.title}</div>
                    <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{c.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
