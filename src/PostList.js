import React from "react";

function PostList({ posts, onDeletePost }) {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          {post.type === "Text" ? (
            <p>{post.content}</p>
          ) : (
            <img src={post.content} alt={`Image Post ${index + 1}`} />
          )}
          <button onClick={() => onDeletePost(index)} name="delete">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostList;
