import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { experience as fallback } from '../data/portfolio.js';
import { fetchExperience } from '../services/api.js';

// Timeline; loads from backend, falls back to local data.
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
    <section className="section" id="experience">
      <div className="container">
        <p className="section-kicker">02 · Experience</p>
        <h2 className="section-title">Professional <em>experience.</em></h2>
        <p className="section-sub">Production computer vision systems, backend development, research, and analytics — with measurable outcomes.</p>
        <div className="timeline">
          {items.map((job, i) => (
            <motion.article
              className="card timeline-item" key={`${job.company}-${i}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="log-dot" aria-hidden="true" />
              <div className="timeline-top">
                <div>
                  <div className="company">{job.role} · {job.company}</div>
                  <div className="role-note">{job.note} · {job.location}</div>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <ul>
                {(job.bullets ?? job.highlights ?? []).map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="pills">
                {(job.tags ?? []).map((t) => <span className="pill" key={t}>{t}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
