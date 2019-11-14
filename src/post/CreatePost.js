import React, { useState } from "react";

export default function CreatePost({ user, posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }
  function handleCreate() {
    const newPost = { title, content, author: user };
    setPosts([newPost, ...posts]);
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title: </label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <textarea value={content} onChange={handleContentChange} />
      <input type="submit" value="Create" />
    </form>
  );
}
