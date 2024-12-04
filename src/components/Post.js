import React, { useContext } from "react";
import Comment from "./Comment";
import UserInfoContext from "../context/UserInfoContext";

export default function Post() {
  const { username, isAdmin } = useContext(UserInfoContext);

  return (
    <div>
      {isAdmin && <button>Delete</button>}

      <h2>Sample Post Title</h2>

      <p>This is example post content</p>

      <Comment isAdmin={isAdmin} username={username}></Comment>
    </div>
  );
}
