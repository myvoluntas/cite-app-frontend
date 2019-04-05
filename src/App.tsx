import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {book1} from "./domain/model/data";
import {Book} from "./domain/model/Book";
import {some} from "fp-ts/lib/Option";
//import {BookServiceInterpreter} from "./domain/service/interpreter/BookServiceInterpreter";

class App extends Component {
  render() {

    console.log(book1.title);

    //Monocle
    console.log('----------- Monocle-ts -------------');
    const newBookMonocle = Book.updateTitle(book1, some('New title generate with monocle'));
    const getTitleWithMonocle = Book.readTitle(newBookMonocle);
    console.log('Book.readTitle(newBookMonocle):' + getTitleWithMonocle);
    console.log()

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
