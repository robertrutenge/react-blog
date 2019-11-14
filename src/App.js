import React from "react";

import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";

const user = "Robert Rutenge";
const posts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Robert Rutenge"
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Robert  Rutenge"
  }
];

export default function App() {
  return (
    <div style={{ padding: 8 }}>
      <UserBar />
      <br />
      <CreatePost user={user} />
      <br />
      <br />
      <PostList posts={posts} />
    </div>
  );
}
