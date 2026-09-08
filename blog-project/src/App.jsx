import { useMemo, useState } from "react";
import featuredImg from "./assets/featured.jpg";
import designImg from "./assets/post-design.jpg";
import reactImg from "./assets/post-react.jpg";
import writingImg from "./assets/post-writing.jpg";

const posts = [
  {
    id: 1,
    title: "Designing a blog people actually finish reading",
    excerpt:
      "Typography, rhythm and restraint matter far more than clever layouts. Here is the checklist I use before publishing anything.",
    category: "Design",
    author: "Maya Iyer",
    date: "Sep 2, 2026",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "State management without the ceremony",
    excerpt:
      "Most apps never need a global store. A short tour of props, context and when a library finally earns its place.",
    category: "React",
    author: "Darshil C.",
    date: "Aug 28, 2026",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The quiet power of small components",
    excerpt:
      "Splitting a screen into honest little pieces makes reviews faster, tests smaller and refactors far less scary.",
    category: "React",
    author: "Leo Marsh",
    date: "Aug 21, 2026",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Writing on a schedule you can keep",
    excerpt:
      "Consistency beats brilliance. A simple weekly system for turning half-formed notes into finished posts.",
    category: "Writing",
    author: "Maya Iyer",
    date: "Aug 14, 2026",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Colour systems that survive a redesign",
    excerpt:
      "Name your colours by role, not by hue. Your future self will thank you the first time the brand shifts.",
    category: "Design",
    author: "Ana Ruiz",
    date: "Aug 6, 2026",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Shipping side projects before they get boring",
    excerpt:
      "Scope is the only real deadline. How to cut a project down to the version you will actually finish.",
    category: "Writing",
    author: "Leo Marsh",
    date: "Jul 30, 2026",
    readTime: "5 min read",
  },
];

const categories = ["All", "Design", "React", "Writing"];

const categoryImages = {
  Design: designImg,
  React: reactImg,
  Writing: writingImg,
};

export default function App() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const featured = posts[0];
  const rest = posts.slice(1);

  const visible = useMemo(
    () =>
      rest.filter(
        (p) =>
          (active === "All" || p.category === active) &&
          (p.title + p.excerpt).toLowerCase().includes(query.toLowerCase()),
      ),
    [active, query, rest],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            Inkwell<span className="text-primary">.</span>
          </span>
          <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a className="transition-colors hover:text-foreground" href="#stories">
              Stories
            </a>
            <a className="transition-colors hover:text-foreground" href="#stories">
              Topics
            </a>
            <a className="transition-colors hover:text-foreground" href="#subscribe">
              Subscribe
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Blog Project
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Notes on building thoughtful software.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Essays on design systems, React patterns and the craft of shipping
            work you are proud of — published every other week.
          </p>

          <article className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
            <img
              src={featuredImg}
              alt="Abstract navy and amber artwork for the featured story"
              width={1600}
              height={912}
              className="h-44 w-full object-cover sm:h-64"
            />
            <div className="p-7">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-accent px-3 py-1 font-medium text-accent-foreground">
                  Featured
                </span>
                <span>{featured.category}</span>
                <span aria-hidden>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                {featured.author} · {featured.date}
              </p>
            </div>
          </article>
        </section>

        <section id="stories" className="mx-auto max-w-5xl px-6 pb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={[
                    "rounded-full px-4 py-1.5 text-sm transition-colors",
                    active === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
                  ].join(" ")}
                >
                  {c}
                </button>
              ))}
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories…"
              aria-label="Search stories"
              className="w-full rounded-full border border-input bg-card px-4 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring sm:w-56"
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {visible.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <img
                  src={categoryImages[post.category] ?? designImg}
                  alt={`Illustration for ${post.category} stories`}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-40 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 text-xs text-muted-foreground">
                    {post.author} · {post.date} · {post.readTime}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-10 text-center text-sm text-muted-foreground">
              No stories match that search yet.
            </p>
          )}
        </section>

        <section id="subscribe" className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Get new posts in your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              One email every other week. No noise, no spam, unsubscribe anytime.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 rounded-full border border-input bg-card px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-ring"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          © 2026 Inkwell — Blog Project.
        </div>
      </footer>
    </div>
  );
}
