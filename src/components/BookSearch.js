import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default function BookSearch() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyBTq38Uipjiua2-MXqpwVVmkZNP9eq0FqQ");
  const [bookList, setBookList] = useState([]);

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResult=5"
      )
      .then((data) => {
        console.log("data from submit-->", data.data.items);
        setResult(data.data.items);
      });
  }

  function handleAdd(event) {
    const bookToAdd = event.target;
    console.log(bookToAdd);
    setBookList(book);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            onChange={handleChange}
            className=""
            placeholder="Search Books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Search{" "}
        </button>
      </form>

      {result.map((book) => (
        <div key={book.id}>
          <h1>{book.volumeInfo.title}</h1>
          <h3>by {book.volumeInfo.authors}</h3>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
          <button type="button" onClick={handleAdd}>
            Add to Reading List
          </button>
        </div>
      ))}
    </div>
  );
}
