import axios from 'axios';
import * as fallback from '../data/portfolio.js';

// Axios client pointed at the Django backend.
// In Vite dev, /api is proxied to http://localhost:8000 (see vite.config.js).
// On GitHub Pages there is no proxy, so set VITE_API_URL to the hosted
// backend origin (e.g. https://your-backend.onrender.com/api). When unset
// or unreachable, every call below falls back to local data / mailto.
const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 6000,
  headers: { 'Content-Type': 'application/json' },
});

// Generic GET with fallback to local data on any failure.
// Also normalizes backend shapes -> frontend shapes and guards against
// unexpected payloads (the previous crash: backend returned `highlights`
// / `tech` while UI expected `bullets` / `tags`, causing .map of undefined).
async function getOrFallback(path, fallbackValue, normalize) {
  try {
    const res = await client.get(path);
    // Accept either {results|data} envelopes or raw payloads.
    let body = res.data;
    if (body && typeof body === 'object') {
      if (Array.isArray(body.results)) body = body.results;
      else if (body.data !== undefined) body = body.data;
    }
    if (body == null) return fallbackValue;
    const out = normalize ? normalize(body) : body;
    // Guard: if fallback is an array, only accept arrays.
    if (Array.isArray(fallbackValue) && !Array.isArray(out)) return fallbackValue;
    return out ?? fallbackValue;
  } catch {
    return fallbackValue;
  }
}

const asArray = (v) => (Array.isArray(v) ? v : []);

function normalizeExperience(body) {
  if (!Array.isArray(body)) return body;
  return body.map((job, i) => ({
    company: job.company ?? 'Unknown',
    role: job.role ?? '',
    period: job.period ?? [job.start, job.end].filter(Boolean).join(' — ') ?? '',
    location: job.location ?? '',
    note: job.note ?? '',
    bullets: asArray(job.bullets ?? job.highlights),
    tags: asArray(job.tags),
    _key: `${job.company ?? 'job'}-${i}`,
  }));
}

function normalizeProjects(body) {
  if (!Array.isArray(body)) return body;
  return body.map((p) => ({
    title: p.title ?? 'Untitled',
    subtitle: p.subtitle ?? p.publication ?? '',
    description: p.description ?? '',
    tags: asArray(p.tags ?? p.tech),
    icon: p.icon ?? '💡',
    link: p.link ?? null,
  }));
}

function normalizePublications(body) {
  if (!Array.isArray(body)) return body;
  return body.map((p) => ({
    title: p.title ?? 'Untitled',
    venue: p.venue ?? String(p.year ?? ''),
    icon: p.icon ?? '📄',
    detail: p.detail ?? p.description ?? '',
  }));
}

export const fetchProfile = () => getOrFallback('/profile/', fallback.profile);
export const fetchExperience = () => getOrFallback('/experience/', fallback.experience, normalizeExperience);
export const fetchProjects = () => getOrFallback('/projects/', fallback.projects, normalizeProjects);
export const fetchSkills = () => getOrFallback('/skills/', fallback.skills);
export const fetchPublications = () => getOrFallback('/publications/', fallback.publications, normalizePublications);

// POST contact message; returns { ok, via } so UI can show backend vs mailto mode.
export async function submitContact(payload) {
  try {
    const res = await client.post('/contact/', payload);
    return { ok: true, via: 'api', data: res.data };
  } catch {
    return { ok: false, via: 'mailto' };
  }
}

export default client;
