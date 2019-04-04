import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {newTitle, viewTitle} from "./domain/model/lenses/BookLenses";
import {book1} from "./domain/model/data";
import {some} from "fp-ts/lib/Option";
import {Book} from "./domain/model/Book";


class App extends Component {
  render() {

    console.log(book1.title);
    const book1New = newTitle(book1, some('Neuer Titel'));
    console.log(viewTitle(book1New));

    const book3 = Book.newTitleStatic(book1New, some('mega neu digga'));
    console.log(viewTitle(book3));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
