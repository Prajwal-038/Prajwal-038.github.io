import { motion } from 'framer-motion';
import { education, certifications } from '../data/portfolio.js';

// Section 05 — education and certifications.
export default function Education() {
  return (
    <section className="section container" id="education">
      <div className="sec-head">
        <span className="sec-idx">05</span>
        <h2 className="sec-title">Education and Certifications</h2>
        <span className="sec-rule" />
      </div>
      <p className="sec-sub">
        Academic foundation in artificial intelligence and data science, complemented by
        applied research and professional certifications.
      </p>

      <div className="grid-2">
        <motion.div
          className="module"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.35 }}
        >
          <div className="module-head">
            <span className="module-idx">EDU-01</span>
            <span className="led" style={{ marginLeft: 'auto' }} />
          </div>
          <h3>{education.degree}</h3>
          <div className="sub" style={{ marginTop: 6 }}>{education.school} · {education.period}</div>
          <div className="chips" style={{ marginTop: 12 }}>
            <span className="chip signal">{education.cgpa}</span>
          </div>
          <ul style={{ color: 'var(--ink-2)', fontSize: 12.5, paddingLeft: 16, marginTop: 12 }}>
            {education.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </motion.div>

        <motion.div
          className="module"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.35, delay: 0.08 }}
        >
          <div className="module-head">
            <span className="module-idx">CERT</span>
            <span className="led" style={{ marginLeft: 'auto' }} />
          </div>
          <h3>Professional certifications</h3>
          <table className="dtable" style={{ marginTop: 12 }}>
            <thead>
              <tr>
                <th>Credential</th>
                <th>Issuer</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((c) => (
                <tr key={c.title}>
                  <td className="strong">{c.title}</td>
                  <td>{c.issuer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
