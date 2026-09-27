# Prajwal S — Portfolio (React + Django)

Professional tech-savvy portfolio for **Prajwal S, Software Engineer – Computer Vision & Data**.

```
Portfolio-Opencode/
  frontend/  # React 18 + Vite + Framer Motion + Axios (dark tech theme)
  backend/   # Django 5 + DRF + CORS (JSON APIs, SQLite contact store)
```

## Quick start

### Backend (http://localhost:8000)
```powershell
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
APIs: `/api/profile/ /api/experience/ /api/projects/ /api/skills/ /api/education/ /api/publications/ /api/certifications/ /api/contact/ (GET+POST) /api/health/`

### Frontend (http://localhost:5173)
```powershell
cd frontend
npm install
npm run dev
# production: npm run build; npm run preview
```
Vite proxies `/api` → `http://localhost:8000` in dev. If backend is down, UI falls back to `src/data/portfolio.js` and contact falls back to mailto.

## Features
- Sticky blur navbar, hero with typing effect + terminal card + stats (2+ yrs, 30%, 35%, 3 pubs)
- Timeline experience (Compviz AIMS/KFEANS, NIT-K), project cards, grouped skill pills, publications, education, certifications, contact form (POST to Django)
- Verified: `manage.py check + migrate + API tests` pass, `npm run build` succeeds (vite 5, 455 modules).
