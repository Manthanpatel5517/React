export default function PostCard({ post, onOpen }) {
  return (
    <article className="post-card">
      <button className="post-card-body" onClick={() => onOpen(post.id)}>
        <span className="post-category post-category-small">{post.category}</span>
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-excerpt">{post.excerpt}</p>
        <div className="post-meta post-meta-small">
          <span>{post.date}</span>
          <span className="meta-dot" aria-hidden="true" />
          <span>{post.readTime} read</span>
        </div>
      </button>
    </article>
  )
}
