import { profile, resumeUrl } from '../data/portfolio.js';

// Colophon footer with build stamp and nav links.
export default function Footer() {
  const year = new Date().getFullYear();
  const build = 'v1.0.0';
  return (
    <footer className="footer">
      <div className="tape" />
      <div className="footer-inner" style={{ paddingTop: 20 }}>
        <div>
          <div className="sig">PRAJWAL S</div>
          <div className="build" style={{ marginTop: 6 }}>
            © {year} · {profile.location} · build {build}
          </div>
        </div>
        <div className="build" style={{ textAlign: 'right' }}>
          <div>
            <a href={`mailto:${profile.email}`}>EMAIL</a>
            {' · '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
            {' · '}
            <a href={resumeUrl} target="_blank" rel="noreferrer">RESUME</a>
            {' · '}
            <a href="#top">TOP ↑</a>
          </div>
          <div style={{ marginTop: 6, opacity: 0.7 }}>
            REACT + DJANGO · DEPLOYED VIA GITHUB PAGES
          </div>
        </div>
      </div>
    </footer>
  );
}
