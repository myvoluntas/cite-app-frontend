import * as R from 'ramda';
import {Option, some} from "fp-ts/lib/Option";
import {book1} from "../data";
import {Book} from "../Book";
import {cons} from "fp-ts/lib/Array";
import {Lens} from "monocle-ts";
import {modify} from "fp-ts/lib/State";

export class BookLenses {
    static titleLens = R.lensProp('_title');

    static newTitle = (book: Book, title: Option<string>) => R.set(BookLenses.titleLens, title, book);
    static updateT = (book: Book) => R.view(BookLenses.titleLens, book);

    static viewTitle = (book: Book) => R.view(BookLenses.titleLens, book);

    // monocle-ts

    private static titleLensMonocle= Lens.fromProp<Book>()('title');

    static setTitleMo: (book: Book, newTitle: string) => Book = (book: Book, newTitle: string) => BookLenses.titleLensMonocle.set(some(newTitle))(book);
    static getTitleMo: (book: Book) => any = (book: Book) => BookLenses.titleLensMonocle.get(book);
}