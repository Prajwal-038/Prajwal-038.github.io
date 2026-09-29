import { useEffect, useState } from 'react';
import { navLinks, profile, resumeUrl } from '../data/portfolio.js';

function getInitialTheme() {
  if (typeof document !== 'undefined' && document.documentElement.dataset.theme) {
    return document.documentElement.dataset.theme;
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage.getItem('ps-theme') || 'light';
  }
  return 'light';
}

// Library-card navbar with a dark-mode toggle in the same stamped aesthetic.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem('ps-theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">P</span>
          <span>
            <b>{profile.name}</b>
            <small>bengaluru · cv / data</small>
          </span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button
            className="theme-toggle"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <a className="btn btn-ghost btn-sm nav-cta" href={resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a className="btn btn-primary btn-sm nav-cta" href="#contact">
            Contact
          </a>
          <button className="hamburger" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
