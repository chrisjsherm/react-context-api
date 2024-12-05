import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { useLocation } from "react-router-dom";

export default function Books() {
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search")?.toLowerCase() ?? "";
  const books = useContext(BooksContext);
  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search)
    );
  });

  return (
    <div>
      <h1>Books</h1>

      {filteredBooks.length === 0 && <div>No books match this search.</div>}

      <ul>
        {filteredBooks.map((book) => {
          return (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
