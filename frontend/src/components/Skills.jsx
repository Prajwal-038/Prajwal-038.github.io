import { motion } from 'framer-motion';
import { skills } from '../data/portfolio.js';

// Skill pills grouped by domain.
export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-kicker">04 · Skills</p>
        <h2 className="section-title">Technical <em>expertise.</em></h2>
        <p className="section-sub">Core competencies across machine learning, computer vision, backend development, and data visualization.</p>
        <div className="grid-3">
          {skills.map((g, i) => (
            <motion.div
              className="card skill-group" key={g.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            >
              <h3><span>{g.icon}</span> {g.group}</h3>
              <div className="pills">
                {g.items.map((s) => <span className="pill" key={s}>{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
