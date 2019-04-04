import * as R from 'ramda';
import {Option, some} from "fp-ts/lib/Option";
import {book1} from "../data";
import {Book} from "../Book";
import {cons} from "fp-ts/lib/Array";

export class BookLenses {
    static titleLens = R.lensProp('_title');
//const isbn10 = R.lensProp('ssn');

//const lastnameLensPara = (x: string) => R.lensProp(x);

    static newTitle = (book: Book, title: Option<string>) => R.set(BookLenses.titleLens, title, book);
    static updateT = (book: Book) => R.view(BookLenses.titleLens, book);

    static viewTitle = (book: Book) => R.view(BookLenses.titleLens, book);

}
/*
const titleLens = R.lensProp('_title');
//const isbn10 = R.lensProp('ssn');

//const lastnameLensPara = (x: string) => R.lensProp(x);

    export const newTitle = (book: Book, title: Option<string>) =>R.set(titleLens, title, book);
    export const viewTitle = (book: Book) => R.view(titleLens, book);

 */