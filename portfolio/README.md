# Manthan Patel — Portfolio

A modern, responsive personal portfolio built with React + Vite, with a subtle 3D-interactive UI.

## Tech Stack
- React.js
- Vite
- React Router DOM
- CSS3 (custom, no framework overhead)
- lucide-react icons
- three.js — lightweight 3D scene in the hero background

## Features
- Sticky responsive navbar with an "M" monogram logo and a Resume download button
- Three.js floating wireframe shapes in the hero, with subtle mouse-parallax
- 3D tilt-toward-cursor effect on the hero editor mockup, skill cards, and project cards
  (respects `prefers-reduced-motion`)
- Resume download: `public/resume.pdf` is served at `/resume.pdf` — replace this file with
  your real resume (keep the same filename) any time
- Responsive skills grid, filterable project showcase, timeline-style education section,
  and a validated contact form

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
public/
├── favicon.svg   # M monogram favicon
└── resume.pdf    # Downloadable resume — replace with your own file (same name)

src/
├── components/   # Navbar, Hero, About, Skills, Projects, Education, WhyHireMe,
│                 # Contact, Footer, Logo, ThreeBackground
├── hooks/        # useTilt.js — reusable 3D tilt-on-hover hook
├── pages/        # Home.jsx
├── data/         # skills.js, projects.js, education.js — edit these to update content
├── App.jsx
├── main.jsx
└── index.css
```

Edit `src/data/projects.js` to add or change project cards — no other file needs to change.

## Updating your resume

Replace `public/resume.pdf` with your own PDF, keeping the filename `resume.pdf`. Both the
navbar and hero "Resume" buttons link straight to `/resume.pdf`, so no code changes are needed.
