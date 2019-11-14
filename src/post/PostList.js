import React from "react";

import Post from "./Post";

export default function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          <Post {...post} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}
