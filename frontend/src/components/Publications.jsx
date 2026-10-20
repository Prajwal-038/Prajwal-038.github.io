import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { publications as fallback } from '../data/portfolio.js';
import { fetchPublications } from '../services/api.js';

// Section 06 — publications log.
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
    <section className="section container" id="publications">
      <div className="sec-head">
        <span className="sec-idx">06</span>
        <h2 className="sec-title">Publications</h2>
        <span className="sec-rule" />
      </div>
      <p className="sec-sub">
        Peer-reviewed contributions across deep learning and applied machine learning.
      </p>

      <motion.div
        className="module"
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.35 }}
      >
        <table className="dtable">
          <thead>
            <tr>
              <th style={{ width: '46%' }}>Title</th>
              <th>Venue</th>
              <th style={{ width: '26%' }}>Summary</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.title}>
                <td className="strong">
                  {p.icon ? `${p.icon} ` : ''}
                  {p.title}
                </td>
                <td>{p.venue}</td>
                <td>{p.detail ?? p.description ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
