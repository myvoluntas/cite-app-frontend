
import * as R from 'ramda';
import {Option, some} from "fp-ts/lib/Option";
import {book1} from "../data";
import {Book} from "../Book";

const titleLens = R.lensProp('_title');
//const isbn10 = R.lensProp('ssn');

//const lastnameLensPara = (x: string) => R.lensProp(x);

export const newTitle = (book: Book, title: Option<string>) =>R.set(titleLens, title, book);
export const viewTitle = (book: Book) => R.view(titleLens, book);
