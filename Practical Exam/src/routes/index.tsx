import { createFileRoute } from "@tanstack/react-router";
import { Bookmark, Check, Menu, Play, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import heroImage from "@/assets/the-long-reverie-hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinovault — Curated Movie Library" },
      { name: "description", content: "Browse 18 hand-picked films across drama, thriller, sci-fi, animation, and more." },
      { property: "og:title", content: "Kinovault — Curated Movie Library" },
      { property: "og:description", content: "Browse 18 hand-picked films across drama, thriller, sci-fi, animation, and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MovieLibrary,
});

const posterModules = import.meta.glob("../assets/posters/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const posters = Object.entries(posterModules)
  .sort(([a], [b]) => Number(a.match(/movie-(\d+)/)?.[1] ?? 0) - Number(b.match(/movie-(\d+)/)?.[1] ?? 0))
  .map(([, src]) => src);

const movies = [
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.7 },
  { title: "The Dark Knight", year: 2008, genre: "Thriller", rating: 9.0 },
  { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
  { title: "Spirited Away", year: 2001, genre: "Animation", rating: 8.6 },
  { title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", rating: 8.5 },
  { title: "Parasite", year: 2019, genre: "Drama", rating: 8.5 },
  { title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7 },
  { title: "Oppenheimer", year: 2023, genre: "Drama", rating: 8.3 },
  { title: "Whiplash", year: 2014, genre: "Drama", rating: 8.5 },
  { title: "Oldboy", year: 2003, genre: "Thriller", rating: 8.3 },
  { title: "The Grand Budapest Hotel", year: 2014, genre: "Comedy", rating: 8.1 },
  { title: "Seven Samurai", year: 1954, genre: "Action", rating: 8.6 },
  { title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", rating: 8.0 },
  { title: "The Lighthouse", year: 2019, genre: "Drama", rating: 7.4 },
  { title: "Mulholland Drive", year: 2001, genre: "Mystery", rating: 7.9 },
  { title: "Metropolis", year: 1927, genre: "Sci-Fi", rating: 8.3 },
  { title: "Jaws", year: 1975, genre: "Thriller", rating: 8.1 },
  { title: "Raiders of the Lost Ark", year: 1981, genre: "Action", rating: 8.4 },
].map((movie, index) => ({ ...movie, poster: posters[index] }));

const genres = ["All", "Drama", "Thriller", "Sci-Fi", "Animation", "Action", "Comedy", "Mystery"];

function MovieLibrary() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);

  const visibleMovies = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return movies.filter((movie) => {
      const genreMatches = genre === "All" || movie.genre === genre;
      const queryMatches = !normalized || `${movie.title} ${movie.year} ${movie.genre}`.toLowerCase().includes(normalized);
      return genreMatches && queryMatches;
    });
  }, [genre, query]);

  const toggleSaved = (title: string) => {
    setSaved((current) => current.includes(title) ? current.filter((item) => item !== title) : [...current, title]);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center gap-5 px-4 py-3 sm:px-6">
          <a className="flex shrink-0 items-center gap-2.5" href="#top" aria-label="Kinovault home">
            <span className="grid size-8 place-items-center rounded-md bg-primary font-display text-lg text-primary-foreground">K</span>
            <span className="font-display text-2xl leading-none text-foreground">KINO<span className="text-primary">VAULT</span></span>
          </a>
          <nav className="ml-3 hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex" aria-label="Main navigation">
            <a className="text-foreground" href="#collection">Browse</a>
            <a className="transition-colors hover:text-foreground" href="#genres">Genres</a>
            <a className="transition-colors hover:text-foreground" href="#featured">Now Playing</a>
          </nav>
          <label className="ml-auto flex min-w-0 items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm text-muted-foreground">
            <Search className="size-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="sr-only">Search movies</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search films…" className="w-28 bg-transparent text-foreground outline-none placeholder:text-muted-foreground sm:w-56" />
          </label>
          <Button variant="icon" size="icon" className="lg:hidden" aria-label="Open menu"><Menu className="size-4" /></Button>
        </div>
        <div id="genres" className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-4 pb-3 sm:px-6">
          <span className="mr-1 hidden shrink-0 font-serif text-sm italic text-muted-foreground sm:block">Filter by genre</span>
          {genres.map((item) => (
            <Button key={item} variant={genre === item ? "filterActive" : "filter"} size="sm" onClick={() => setGenre(item)} aria-pressed={genre === item}>{item}</Button>
          ))}
          <span className="ml-auto hidden shrink-0 text-xs text-muted-foreground sm:block"><b className="text-foreground">{visibleMovies.length}</b> films</span>
        </div>
      </header>

      <main id="top">
        <section id="featured" className="relative mx-auto min-h-[560px] max-w-[1600px] overflow-hidden border-x border-b border-border lg:min-h-[670px]">
          <img src={heroImage} alt="A woman in a red dress standing under a theater spotlight" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
          <div className="hero-shade absolute inset-0" />
          <div className="relative z-10 flex min-h-[560px] max-w-3xl flex-col justify-end px-5 py-12 sm:px-10 lg:min-h-[670px] lg:px-16 lg:py-16">
            <p className="font-serif text-lg italic text-primary">Now on the big screen</p>
            <h1 className="mt-2 font-display text-6xl leading-[0.86] text-foreground sm:text-8xl lg:text-9xl">THE LONG<br /><span className="text-primary">REVERIE</span></h1>
            <p className="mt-5 max-w-xl font-serif text-xl italic text-muted-foreground sm:text-2xl">A slow-burn study of memory, set across one glittering night.</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1 font-semibold text-foreground"><Star className="size-4 fill-primary text-primary" /> 8.7</span><span>·</span><span>2024</span><span>·</span><span>Drama</span><span>·</span><span>152 min</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button><Play className="size-4 fill-current" />Play Trailer</Button>
              <Button variant="outline" onClick={() => toggleSaved("The Long Reverie")}>
                {saved.includes("The Long Reverie") ? <Check className="size-4" /> : <Bookmark className="size-4" />}
                {saved.includes("The Long Reverie") ? "On My Shelf" : "Add to My Shelf"}
              </Button>
            </div>
          </div>
        </section>

        <section id="collection" className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:py-16">
          <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
            <div><p className="font-serif italic text-primary">Curated one-sheet by one-sheet</p><h2 className="mt-1 font-display text-4xl text-foreground sm:text-5xl">THE LOBBY WALL</h2></div>
            <span className="shrink-0 text-sm text-muted-foreground">{visibleMovies.length} of 18 films</span>
          </div>
          {visibleMovies.length > 0 ? (
            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {visibleMovies.map((movie) => {
                const isSaved = saved.includes(movie.title);
                return (
                  <article key={movie.title} className="group min-w-0">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card">
                      <img src={movie.poster} alt={`${movie.title} poster artwork`} width={720} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                      <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-background/85 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur"><Star className="size-3 fill-primary text-primary" />{movie.rating}</span>
                      <Button variant="icon" size="icon" className="absolute bottom-2 right-2 bg-background/85 backdrop-blur" onClick={() => toggleSaved(movie.title)} aria-label={`${isSaved ? "Remove" : "Add"} ${movie.title} ${isSaved ? "from" : "to"} shelf`}>
                        {isSaved ? <Check className="size-4 text-primary" /> : <Bookmark className="size-4" />}
                      </Button>
                    </div>
                    <h3 className="mt-3 truncate font-display text-xl leading-tight text-foreground">{movie.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{movie.year} · {movie.genre}</p>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="py-24 text-center"><p className="font-display text-3xl">NO FILMS FOUND</p><p className="mt-2 font-serif italic text-muted-foreground">Try another title or genre.</p></div>
          )}
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span className="font-display text-xl text-foreground">KINO<span className="text-primary">VAULT</span></span>
          <p className="font-serif italic text-muted-foreground">A repertory lobby, kept open all night.</p>
          <p className="text-xs text-muted-foreground">18 films · {saved.length} saved</p>
        </div>
      </footer>
    </div>
  );
}