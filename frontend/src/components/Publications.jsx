import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { publications as fallback } from '../data/portfolio.js';
import { fetchPublications } from '../services/api.js';

export default function Publications() {
  const [items, setItems] = useState(fallback);
  useEffect(() => {
    let alive = true;
    fetchPublications().then((data) => {
      if (alive && Array.isArray(data) && data.length) setItems(data);
    });
    return () => { alive = false; };
  }, []);
  return (
    <section className="section" id="publications">
      <div className="container">
        <p className="section-kicker">05 · Research</p>
        <h2 className="section-title">Publications <em>and research.</em></h2>
        <p className="section-sub">Peer-reviewed contributions across deep learning and applied machine learning.</p>
        <div className="grid-3">
          {items.map((p, i) => (
            <motion.article
              className="card" key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            >
              <div className="icon">{p.icon ?? '✎'}</div>
              <h3>{p.title}</h3>
              <div className="meta-line">{p.venue}</div>
              <p>{p.detail ?? p.description ?? ''}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
