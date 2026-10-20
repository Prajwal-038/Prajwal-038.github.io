import { motion } from 'framer-motion';
import { skills } from '../data/portfolio.js';

// Section 04 — capability modules.
export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="sec-head">
        <span className="sec-idx">04</span>
        <h2 className="sec-title">Capabilities</h2>
        <span className="sec-rule" />
      </div>
      <p className="sec-sub">
        Core competencies across machine learning, computer vision, backend engineering, and
        data visualization.
      </p>

      <div className="grid-3">
        {skills.map((g, i) => (
          <motion.div
            className="module"
            key={g.group}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
          >
            <div className="module-head">
              <span className="module-idx">MOD-{String(i + 1).padStart(2, '0')}</span>
              <span className="icon" style={{ marginLeft: 'auto' }}>{g.icon}</span>
            </div>
            <h3>{g.group}</h3>
            <div className="chips" style={{ marginTop: 12 }}>
              {g.items.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
