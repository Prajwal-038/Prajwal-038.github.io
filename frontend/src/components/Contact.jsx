import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, resumeUrl } from '../data/portfolio.js';
import { submitContact } from '../services/api.js';

// Section 07 — contact channels and message transmitter.
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
      setStatus('ERR: all fields required');
      return;
    }
    setSending(true);
    setStatus('TRANSMITTING...');
    const res = await submitContact(form);
    setSending(false);
    if (res.ok) {
      setOk(true);
      setStatus('OK: message received — response within 48h');
      setForm({ name: '', email: '', message: '' });
    } else {
      setOk(false);
      setStatus('BACKEND OFFLINE — opening your mail client...');
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section className="section container" id="contact">
      <div className="sec-head">
        <span className="sec-idx">07</span>
        <h2 className="sec-title">Contact</h2>
        <span className="sec-rule" />
      </div>
      <p className="sec-sub">
        For professional inquiries regarding roles, collaborations, or research, use the form or
        the direct channels. Response within 48 hours.
      </p>

      <div className="contact-grid">
        <motion.div
          className="module"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.35 }}
        >
          <div className="module-head">
            <span className="module-idx">CH-01</span>
            <span className="led" style={{ marginLeft: 'auto' }} />
          </div>
          <h3>Direct channels</h3>
          <ul className="contact-list">
            <li>
              <span className="k">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="k">LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/prajwal-s</a>
            </li>
            <li>
              <span className="k">Location</span>
              {profile.location}
            </li>
            <li>
              <span className="k">Availability</span>
              Open to opportunities
            </li>
          </ul>
          <div className="chips" style={{ marginTop: 16 }}>
            <a className="btn btn-sm" href={`mailto:${profile.email}`}>Mail</a>
            <a className="btn btn-sm" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-sm" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
          </div>
        </motion.div>

        <motion.form
          className="module form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.35, delay: 0.08 }}
        >
          <div className="module-head">
            <span className="module-idx">TX-01</span>
            <span className="sec-rule" />
          </div>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Full name" value={form.name} onChange={onChange} autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email address" value={form.email} onChange={onChange} autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Describe the role, project, or collaboration..." value={form.message} onChange={onChange} />
          </div>
          <button className="btn btn-solid" type="submit" disabled={sending}>
            {sending ? 'Transmitting...' : 'Transmit'}
          </button>
          <div className={`form-status ${ok ? 'ok' : ''}`}>{status}</div>
        </motion.form>
      </div>
    </section>
  );
}
