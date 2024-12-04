import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import BlogPost from "./components/BlogPage";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  const userInfo = {
    username: "Admin",
    isAdmin: true,
  };

  return (
    <ThemeProvider>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPost></BlogPost>
      </UserInfoContext.Provider>
    </ThemeProvider>
  );
}

export default App;
