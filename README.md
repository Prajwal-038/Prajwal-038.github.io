# Prajwal S — Portfolio (React + Django)

Technical portfolio for **Prajwal S, Software Engineer — Computer Vision & Data**.

```
Portfolio-Opencode/
  frontend/  # React 18 + Vite + Framer Motion + Axios  (instrument-panel theme)
  backend/   # Django 5 + DRF + CORS                    (JSON APIs, SQLite) — kept private
```

## Design

Instrument-panel / gizmo aesthetic: blueprint grid backdrop with scanlines, mono-first
typography (JetBrains Mono + Chakra Petch), signal palette (amber `#f5a524`, data blue
`#4cc9f0`, phosphor green), notched-corner buttons, corner-bracket panels, animated
oscilloscope trace, scrolling signal ticker, hazard-tape footer, and a live IST clock.

Two themes, same instrument:
- **Dark (default)** — "night scope"
- **Light** — "daylight blueprint" (white print with blue linework)

Toggle in the navbar; choice persists in `localStorage` and follows `prefers-color-scheme`
on first visit.

## Quick start

### Backend (http://localhost:8000) — local only, not published
```powershell
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
APIs: `/api/profile/ /api/experience/ /api/projects/ /api/skills/ /api/education/ /api/publications/ /api/certifications/ /api/contact/ (GET+POST) /api/health/` and `/health/`

### Frontend (http://localhost:5173)
```powershell
cd frontend
npm install
npm run dev
# production: npm run build; npm run preview
```
Vite proxies `/api` → `http://localhost:8000` in dev. If the backend is unreachable, the UI
falls back to `src/data/portfolio.js` and the contact form falls back to mailto — so the
site works fully on GitHub Pages with no backend.

Point it at a hosted backend with `VITE_API_URL=https://your-backend/api`.

## Deployment

`.github/workflows/deploy.yml` builds `frontend/` and publishes `frontend/dist` to GitHub
Pages on every push to `main`. Enable it once: **Settings → Pages → Source: GitHub Actions**.

Resume PDF: `frontend/public/Prajwal-S-Resume.pdf` — linked from the navbar, hero,
contact panel, and footer.
