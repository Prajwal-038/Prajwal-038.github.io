import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { experience as fallback } from '../data/portfolio.js';
import { fetchExperience } from '../services/api.js';

// Section 02 — duty log / timeline.
export default function Experience() {
  const [items, setItems] = useState(fallback);
  useEffect(() => {
    let alive = true;
    fetchExperience().then((data) => {
      if (alive && Array.isArray(data) && data.length) setItems(data);
    });
    return () => { alive = false; };
  }, []);

  return (
    <section className="section container" id="experience">
      <div className="sec-head">
        <span className="sec-idx">02</span>
        <h2 className="sec-title">Experience</h2>
        <span className="sec-rule" />
      </div>
      <p className="sec-sub">
        Production computer vision systems, backend development, research, and analytics —
        with measurable outcomes.
      </p>

      <div className="log">
        {items.map((job, i) => (
          <motion.div
            className="log-row"
            key={`${job.company}-${i}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
          >
            <div className="log-when">
              <b>{job.period}</b>
              {job.location}
            </div>
            <span className="log-node" aria-hidden="true" />
            <div className="log-body">
              <h4>
                {job.role} <span style={{ color: 'var(--ink-3)' }}>// {job.company}</span>
              </h4>
              <div className="sub">{job.note}</div>
              <ul>
                {(job.bullets ?? job.highlights ?? []).map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="chips">
                {(job.tags ?? []).map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
