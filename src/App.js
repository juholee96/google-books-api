import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import axios from "axios";

import BookSearch from "./components/BookSearch";
//import Navbar from "./components/Navbar";
import ReadingList from "./components/ReadingList";

export default class App extends Component {
  state = {
    readingList: [],
  };

  addToList = (book) => {
    const { readingList } = this.state;

    if (!readingList.some((alreadyAdded) => alreadyAdded.id === book.id)) {
      this.setState({
        readingList: [...this.state.readingList, book],
      });
    }
    // this.setState({
    //   readingList: [...this.state.readingList, book],
    // });

    console.log("this.state.readingList---->", this.state.readingList);
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <BookSearch addToList={this.addToList} />} />

          <Route
            path="/readinglist"
            render={() => <ReadingList books={this.state.readingList} />}></Route>
        </Switch>
      </Router>
      // <div className="App">
      //   <Navbar />
      //   <BookSearch />
      // </div>
    );
  }
}

//TO DO:
// (tried using react hooks to challenge myself to learn hooks but issues with implementing reading list)
// go back to using redux-react instead of react hooks
// break down BookSearch.js into multiple components: SearchBar.js BookCard.js
// this allows me to implement anonymous function onClick on the button
//
// may need to write server side code, api routes, connect to thunk creators
//
//
//
//
//Notes:
// can't pass props properly to ReadingList comp.
// after making a change --> need to double click to add the book to state.... smh
//
