import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export default function Books() {
  const books = useContext(BooksContext);

  return (
    <div>
      <h1>Books</h1>

      <ul>
        {books.map((book) => {
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