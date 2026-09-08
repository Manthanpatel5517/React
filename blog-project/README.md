# Blog Project

A small, editorial-style blog built with React + Vite. Browse posts by category from
the home page, or open any entry to read the full piece.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  data/posts.js         sample post content — edit or add entries here
  components/           Header, FeaturedPost, PostList, PostCard, PostView, Footer
  App.jsx               page state: which post is open, which category is selected
  index.css             all styling, using CSS custom properties as design tokens
```

To add a new post, add an object to the array in `src/data/posts.js` — everything
else (the grid, filters, and detail page) updates automatically.
