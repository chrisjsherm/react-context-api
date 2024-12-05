import "./App.css";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import NotFound from "./components/NotFound";
import SecretBooks from "./components/SecretBooks";
import { BooksProvider } from "./context/BooksContext";
import { PrivateRoute } from "./components/PrivateRoute";
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
          <Route
            path="/secret"
            element={<PrivateRoute Component={<SecretBooks />} />}
          ></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
