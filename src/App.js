import "./App.css";
import Books from "./components/Books";
import { BooksProvider } from "./context/BooksContext";
function App() {
  return (
    <BooksProvider>
      <Books></Books>
    </BooksProvider>
  );
}

export default App;
