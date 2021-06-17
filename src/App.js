import "./App.css";
import React, { Component } from "react";
import BookSearch from "./components/BookSearch";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BookSearch />
      </div>
    );
  }
}

export default App;

//TO DO:
// (tried using react hooks to challenge myself to learn hooks but issues with implementing reading list)
// go back to using redux-react instead of react hooks
// break down BookSearch.js into multiple components: SearchBar.js BookCard.js
// this allows me to implement anonymous function onClick on the button
//
// may need to write server side code, api routes, connect to thunk creators
//
