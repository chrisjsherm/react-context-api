import logo from "./logo.svg";
import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import BlogPost from "./components/BlogPost";

function App() {
  const userInfo = {
    username: "Admin",
    isAdmin: true,
  };

  return (
    <UserInfoContext.Provider value={userInfo}>
      <BlogPost></BlogPost>
    </UserInfoContext.Provider>
  );
}

export default App;
