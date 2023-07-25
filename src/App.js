import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <PostCreate onCreatePost={handleCreatePost} />
      <PostList posts={posts} onDeletePost={handleDeletePost} />
    </div>
  );
}

export default App;
