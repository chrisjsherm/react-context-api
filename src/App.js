import "./App.css";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import { BooksProvider } from "./context/BooksContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/books"></Navigate>}></Route>
          <Route path="/books" element={<Books></Books>}></Route>
          <Route
            path="/books/:bookId"
            element={<BookDetails></BookDetails>}
          ></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
