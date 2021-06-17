import React, { Component } from "react";

class ReadingList extends Component {
  constructor(props) {
    super(props);

    console.log("props in constructor", props);
  }
  render() {
    console.log("props from list", this.props);
    const { books } = this.props;
    return (
      <div className="App">
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id}>
                <div>
                  <h1>{book.volumeInfo.title}</h1>
                  <h3>by {book.volumeInfo.authors}</h3>
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ReadingList;

// Might need to recode using redux (store)
// by using Redux-React, allow the add button to add to the reading list
//
