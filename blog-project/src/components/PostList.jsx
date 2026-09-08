import PostCard from './PostCard.jsx'

export default function PostList({ posts, onOpen }) {
  if (posts.length === 0) {
    return <p className="empty-state">Nothing filed under this topic yet.</p>
  }

  return (
    <div className="post-grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onOpen={onOpen} />
      ))}
    </div>
  )
}
