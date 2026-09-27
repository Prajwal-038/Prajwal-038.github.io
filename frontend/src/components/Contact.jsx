import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio.js';
import { submitContact } from '../services/api.js';

// Contact info + form. POSTs to /api/contact/; falls back to mailto on failure.
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [ok, setOk] = useState(false);
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setOk(false);
      setStatus('Please fill in all fields.');
      return;
    }
    setSending(true);
    setStatus('Sending…');
    const res = await submitContact(form);
    setSending(false);
    if (res.ok) {
      setOk(true);
      setStatus('Thank you — your message has been received. I will respond within 48 hours.');
      setForm({ name: '', email: '', message: '' });
    } else {
      // Backend offline: open the visitor's mail client with prefilled content.
      setOk(false);
      setStatus('Backend offline — opening your email client instead…');
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-kicker">07 · Contact</p>
        <h2 className="section-title">Get in <em>touch.</em></h2>
        <p className="section-sub">For professional inquiries regarding roles, collaborations, or research, please use the form below or contact me directly. I respond within 48 hours.</p>
        <div className="contact-grid">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4 }}
          >
            <h3>Contact details</h3>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 14 }}>
              <a className="btn btn-ghost btn-sm" href={`mailto:${profile.email}`}>Mail</a>
              <a className="btn btn-ghost btn-sm" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <ul className="contact-list">
              <li>⌂ {profile.location}</li>
            </ul>
            <div className="pills">
              <span className="pill cy">Response within 48h</span>
              <span className="pill">Open to opportunities</span>
            </div>
          </motion.div>
          <motion.form
            className="card form" onSubmit={onSubmit}
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: 0.08 }}
          >
            <input name="name" placeholder="Full name" value={form.name} onChange={onChange} autoComplete="name" />
            <input name="email" type="email" placeholder="Email address" value={form.email} onChange={onChange} autoComplete="email" />
            <textarea name="message" placeholder="Please describe the role, project, or collaboration…" value={form.message} onChange={onChange} />
            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send message'}
            </button>
            <div className={`form-status ${ok ? 'ok' : ''}`}>{status}</div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
