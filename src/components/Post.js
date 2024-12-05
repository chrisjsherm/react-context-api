import React from "react";

export default function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>

      <article>{post.body}</article>
    </div>
  );
}
