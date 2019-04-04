
import * as R from 'ramda';
import {Option, some} from "fp-ts/lib/Option";
import {book1} from "../data";
import {Book} from "../Book";

const titleLens = R.lensProp('_title');
//const isbn10 = R.lensProp('ssn');

//const lastnameLensPara = (x: string) => R.lensProp(x);

export const person1New = (book: Book, title: Option<string>) => R.pipe(R.set(titleLens, title))(book);
