import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BookLenses} from "./domain/model/lenses/BookLenses";

import {book1} from "./domain/model/data";
import {some} from "fp-ts/lib/Option";
import {Book} from "./domain/model/Book";
import {BookServiceInterpreter} from "./domain/service/interpreter/BookServiceInterpreter";

class App extends Component {
  render() {

    console.log(book1.title);
    //------
    const book1New = BookLenses.newTitle(book1, some('Neuer Titel'));
    console.log(BookLenses.viewTitle(book1New));
    const book3 = BookLenses.newTitle(book1New, some('mega neu digga'));

    const viewTle = BookLenses.viewTitle(book3);
    console.log('BookLenses.viewTitle(book3): ' + viewTle);


    console.log(Book.readTitle(book1New));
    const title = Book.readTitle(book1New);
    console.log('BookLenses.viewTitle(book3): ' + BookLenses.viewTitle(book3));

    console.log('title: ' + title);

    //Monocle
    console.log('----------- Monocle-ts -------------');

    const newBookMonocle = BookLenses.setTitleMo(book3, 'New title generate with monocle');
    const getTitleWithMonocle = BookLenses.getTitleMo(newBookMonocle);
    console.log('BookLenses.getTitleMo(newBookMonocle):' + getTitleWithMonocle);

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
