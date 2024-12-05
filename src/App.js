import "./App.css";
import { BooksProvider } from "./context/BooksContext";
function App() {
  return (
    <BooksProvider>
      <div className="App"></div>
    </BooksProvider>
  );
}

export default App;
