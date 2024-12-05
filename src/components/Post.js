import React, { useState } from "react";

export default function Post({ post, handleDelete, isDeleting }) {
  return (
    <div>
      <h2>{post.title}</h2>

      <article>{post.body}</article>

      <button onClick={() => handleDelete(post.id)} disabled={isDeleting}>
        Delete
      </button>
    </div>
  );
}
