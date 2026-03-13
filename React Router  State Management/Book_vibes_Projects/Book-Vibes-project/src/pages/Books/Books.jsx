import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";
import { Suspense } from "react";
export default function Books() {
  const [allBooks, setAllBooks] = useState([]);
  const data = useLoaderData(); //use router to load data just for example
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold  text-center">Books</h1>
      </div>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allBooks.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
        </div>
      </Suspense>
    </div>
  );
}
