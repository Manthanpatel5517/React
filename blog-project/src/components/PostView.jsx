export default function PostView({ post, onBack }) {
  return (
    <article className="post-view">
      <button className="back-link" onClick={onBack}>
        ← Back to all entries
      </button>

      <header className="post-view-head">
        <span className="post-category">{post.category}</span>
        <h1 className="post-view-title">{post.title}</h1>
        <div className="post-meta">
          <span>{post.date}</span>
          <span className="meta-dot" aria-hidden="true" />
          <span>{post.readTime} read</span>
        </div>
      </header>

      <div className="post-view-body">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
