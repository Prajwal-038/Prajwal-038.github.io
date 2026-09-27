# Prajwal S — Portfolio Frontend

React 18 + Vite single-page portfolio. Dark tech theme, Framer Motion animations, Axios API layer with local-data fallback.

## Quick start

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

Backend (Django) is expected at `http://localhost:8000`. Vite proxies `/api/*` to it in dev. If the backend is offline, the UI falls back to `src/data/portfolio.js`.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  main.jsx            # React entry
  App.jsx             # Section composition + nav state
  index.css           # Theme tokens, base, utilities
  App.css             # Section / component styles
  data/portfolio.js   # All resume data (fallback + source of truth)
  services/api.js     # API client with graceful fallback
  components/         # Navbar, Hero, About, Experience, Projects,
                      # Skills, Education, Publications, Contact, Footer
```
