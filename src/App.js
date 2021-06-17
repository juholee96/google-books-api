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
