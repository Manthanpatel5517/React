export default function FeaturedPost({ post, onOpen }) {
  return (
    <section className="featured">
      <button className="featured-body" onClick={() => onOpen(post.id)}>
        <h1 className="featured-title">{post.title}</h1>
        <p className="featured-excerpt">{post.excerpt}</p>
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <span className="meta-dot" aria-hidden="true" />
          <span>{post.date}</span>
          <span className="meta-dot" aria-hidden="true" />
          <span>{post.readTime} read</span>
        </div>
      </button>
    </section>
  )
}
