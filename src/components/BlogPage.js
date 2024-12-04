import React, { useContext } from "react";
import Post from "./Post";
import ThemeContext from "../context/ThemeContext";

export default function BlogPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Blog</h1>

      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Post></Post>
    </div>
  );
}
