import React, { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((e) => console.error(e));
    return () => {};
  }, []);

  return (
    <BooksContext.Provider value={books}>{children}</BooksContext.Provider>
  );
};
