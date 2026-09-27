import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projects as fallback } from '../data/portfolio.js';
import { fetchProjects } from '../services/api.js';

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
    <section className="section" id="projects">
      <div className="container">
        <p className="section-kicker">03 · Selected work</p>
        <h2 className="section-title">Selected <em>projects.</em></h2>
        <p className="section-sub">Applied deep learning, real-time detection systems, backend platforms, and analytics solutions developed for production and research use.</p>
        <div className="grid-2">
          {items.map((p, i) => (
            <motion.article
              className="card" key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
            >
              <div className="icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <div className="meta-line">{p.subtitle}</div>
              <p>{p.description}</p>
              <div className="pills">
                {(p.tags ?? p.tech ?? []).map((t) => <span className="pill cy" key={t}>{t}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
