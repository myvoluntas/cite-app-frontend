import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {newTitle, viewTitle} from "./domain/model/lenses/BookLenses";
import {book1} from "./domain/model/data";
import {some} from "fp-ts/lib/Option";


class App extends Component {
  render() {

    console.log(book1.title);
    const book1New = newTitle(book1, some('Neuer Titel'));
    console.log(viewTitle(book1New));

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
