import React, { useContext, useState, useEffect } from "react";
import Post from "./Post";
import ThemeContext from "../context/ThemeContext";
import { getPosts, deletePost } from "../services/postService";

export default function BlogPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((result) => {
        setPosts(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleDelete = (id) => {
    setIsDeleting(true);
    deletePost(id)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((e) => console.error(e))
      .finally(() => setIsDeleting(false));
  };

  return (
    <div>
      <h1>Blog</h1>

      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <Post
              post={post}
              key={post.id}
              handleDelete={handleDelete}
              isDeleting={isDeleting}
            ></Post>
          );
        })}
    </div>
  );
}
