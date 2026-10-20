import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projects as fallback } from '../data/portfolio.js';
import { fetchProjects } from '../services/api.js';

// Section 03 — project modules.
export default function Projects() {
  const [items, setItems] = useState(fallback);
  useEffect(() => {
    let alive = true;
    fetchProjects().then((data) => {
      if (alive && Array.isArray(data) && data.length) setItems(data);
    });
    return () => { alive = false; };
  }, []);

  return (
    <section className="section container" id="projects">
      <div className="sec-head">
        <span className="sec-idx">03</span>
        <h2 className="sec-title">Selected Work</h2>
        <span className="sec-rule" />
      </div>
      <p className="sec-sub">
        Applied deep learning, real-time detection systems, backend platforms, and analytics
        solutions developed for production and research use.
      </p>

      <div className="grid-2">
        {items.map((p, i) => (
          <motion.article
            className="module proj"
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: (i % 2) * 0.07 }}
          >
            <div className="module-head">
              <span className="module-idx">PRJ-{String(i + 1).padStart(2, '0')}</span>
              <span className="led" style={{ marginLeft: 'auto' }} />
            </div>
            <div className="icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <div className="sub">{p.subtitle}</div>
            <p className="desc">{p.description}</p>
            <div className="chips">
              {(p.tags ?? p.tech ?? []).map((t) => (
                <span className="chip accent" key={t}>{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
