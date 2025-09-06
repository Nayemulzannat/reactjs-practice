import React from 'react';

export default function Post({post}) {
  console.log(post);

  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "8px", borderRadius: "8px" }}>
      <h5>Title: {post.title}</h5>
      <p><strong>User ID:</strong> {post.userId}</p>
      <p><strong>ID:</strong> {post.id}</p>
      <p><strong>Status:</strong> {post.completed ? "✅ Completed" : "❌ Pending"}</p>
    </div>
  );
}

