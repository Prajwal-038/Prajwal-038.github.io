import { profile } from '../data/portfolio.js';

// Professional colophon footer.
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="signature">Prajwal S.</div>
          <div className="mono" style={{ fontSize: '0.74rem', marginTop: 6 }}>
            © {year} · {profile.location}
            <br />
            Designed with care · Built with React + Django
          </div>
        </div>
        <div className="mono" style={{ fontSize: '0.78rem', textAlign: 'right' }}>
          <div>
            <a href={`mailto:${profile.email}`}>Email</a>
            {' · '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            {' · '}
            <a href="#top">Back to top ↑</a>
          </div>
          <div className="hand" style={{ fontSize: '1.15rem', color: 'var(--accent-ink)', marginTop: 6 }}>
            Thank you for visiting.
          </div>
        </div>
      </div>
    </footer>
  );
}
