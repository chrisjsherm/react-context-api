import React from "react";

export default function PostForm({ createPost, isCreating }) {
  function onPostCreated(e) {
    e.preventDefault();
    const post = {};
    for (let [key, value] of new FormData(e.currentTarget).entries()) {
      post[key] = value;
    }
    createPost(post, () => e.target.reset());
  }

  const controlStyle = {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  };

  return (
    <form onSubmit={onPostCreated}>
      <div style={controlStyle}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title"></input>
      </div>

      <div style={controlStyle}>
        <label htmlFor="title">Body</label>
        <input type="text" name="body"></input>
      </div>

      <button type="submit" disabled={isCreating}>
        Create
      </button>
    </form>
  );
}
