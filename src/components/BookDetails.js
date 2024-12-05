import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { bookId } = useParams();
  const books = useContext(BooksContext);
  const book = books.find((book) => book.id === Number.parseInt(bookId, 10));

  if (books.length === 0) {
    return <div>Loading&hellip;</div>;
  }

  if (!book) {
    return <h1>Not Found</h1>;
  }

  return (
    <>
      <h1>{book.title}</h1>

      <h2>By {book.author}</h2>

      <p>{book.description}</p>
    </>
  );
}
