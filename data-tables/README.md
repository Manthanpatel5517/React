# Data Tables — Student Practical & Assignment Management Dashboard

A responsive student dashboard for tracking practicals, submissions and marks, built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Tech stack

- React 18 + Vite
- React Router DOM (client-side routing)
- lucide-react (icons)
- Plain modern CSS (no CSS framework), design tokens in `src/index.css`

## Project structure

```
src/
├── components/     Reusable UI pieces (Sidebar, Navbar, table, modals, etc.)
├── pages/          One component per route
├── data/           Seed data for the practical list
├── App.jsx         Routing + shared layout + lifted state
├── main.jsx        React entry point
└── index.css       Design tokens + all component styles
```

## Features

- Dashboard with live stats (total, completed, pending, average marks)
- Overall performance bar + a sequenced "practical roadmap" view
- Searchable, filterable, sortable practical table
- Add, submit, view-detail, and delete practicals (all via React state)
- Responsive down to mobile: collapsible sidebar → drawer, table → cards
- Empty and loading states, delete confirmation dialog

## Notes

- All data lives in memory (`useState` lifted to the layout and shared via
  `useOutletContext`) — refreshing the page resets it back to the seed data
  in `src/data/practicalData.js`. Swap that out for an API call if you want
  it to persist.
