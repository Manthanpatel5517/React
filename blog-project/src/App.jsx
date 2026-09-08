import { useMemo, useState } from 'react'
import posts from './data/posts.js'
import Header from './components/Header.jsx'
import FeaturedPost from './components/FeaturedPost.jsx'
import PostList from './components/PostList.jsx'
import PostView from './components/PostView.jsx'
import Footer from './components/Footer.jsx'

const CATEGORIES = ['All', ...new Set(posts.map((p) => p.category))]

export default function App() {
  const [activeId, setActiveId] = useState(null)
  const [category, setCategory] = useState('All')

  const activePost = useMemo(
    () => posts.find((p) => p.id === activeId) ?? null,
    [activeId],
  )

  const visiblePosts = useMemo(
    () =>
      category === 'All' ? posts : posts.filter((p) => p.category === category),
    [category],
  )

  const openPost = (id) => {
    setActiveId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setActiveId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="page">
      <Header onLogoClick={goHome} />

      <main>
        {activePost ? (
          <PostView post={activePost} onBack={goHome} />
        ) : (
          <>
            <FeaturedPost post={posts[0]} onOpen={openPost} />

            <section className="archive">
              <div className="archive-head">
                <h2 className="archive-title">Latest entries</h2>
                <div className="filters" role="tablist" aria-label="Filter by category">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      role="tab"
                      aria-selected={category === c}
                      className={`filter-pill ${category === c ? 'is-active' : ''}`}
                      onClick={() => setCategory(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <PostList posts={visiblePosts} onOpen={openPost} />
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
