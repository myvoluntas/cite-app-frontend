import { Option, some, none } from 'fp-ts/lib/Option';

import v1 from 'uuid/v1';
import {Person} from "./common";
import {Lens} from "monocle-ts";

/*
Notes
- Cant implement properties of an interface as static methods in class: interface BookLens -> class Book
 */


type UUIDIV = string // https://github.com/kelektiv/node-uuid

export enum TypeOfBook{
    Monograph,
    Collected
}

interface BookInterface {
    id: UUIDIV
    typeOfBook: TypeOfBook
    isbn10: Option<string>
    isbn13: Option<string>
    edition: Option<number>
    authors: Option<Array<Person>>
    collaborators: Option<Array<Person>>
    publisher: Option<string>
    placeOfPublication: Option<string>
    dateOfPublication: Option<string>
    title: Option<string>
    subtitle: Option<string>
    pages: Option<number>
    language: Option<string>
    customFields: Option<Array<Map<string,string>>>
}



export class Book implements BookInterface {
    constructor(readonly id: UUIDIV,
                readonly typeOfBook: TypeOfBook,
                readonly isbn10: Option<string>,
                readonly isbn13: Option<string>,
                readonly edition: Option<number>,
                readonly authors: Option<Array<Person>>,
                readonly collaborators: Option<Array<Person>>,
                readonly publisher: Option<string>,
                readonly placeOfPublication: Option<string>,
                readonly dateOfPublication: Option<string>,
                readonly title: Option<string>,
                readonly subtitle: Option<string>,
                readonly pages: Option<number>,
                readonly language: Option<string>,
                readonly customFields: Option<Array<Map<string,string>>>) {}

    /*
    get id(): UUIDIV {
        return this._id
    }
    get typeOfBook(): TypeOfBook {
        return this._typeOfBook
    }
    get isbn10():Option<string> {
        return this._isbn10
    }
    get isbn13(): Option<string> {
        return this._isbn13
    }
    get edition(): Option<number> {
        return this._edition
    }
    get authors(): Option<Array<Person>> {
        return this._authors
    }
    get collaborators(): Option<Array<Person>> {
        return this._collaborators
    }
    get publisher(): Option<string> {
        return this._publisher
    }
    get placeOfPublication(): Option<string> {
        return this._placeOfPublication
    }
    get dateOfPublication(): Option<string> {
        return this._dateOfPublication
    }
    get title(): Option<string> {
        return this._title
    }
    get subtitle(): Option<string> {
        return this._subtitle
    }
    get pages(): Option<number> {
        return this._pages
    }
    get language(): Option<string> {
        return  this._language
    }
    get customFields(): Option<Array<Map<string,string>>> {
     return this._customFields
    }
     */

    /*
        // helper for lenses
    static idLens = R.lensProp('id');
    static typeOfBookLens = R.lensProp('typeOfBook');
    static isbn10Lens = R.lensProp('isbn10');
    static isbn13Lens = R.lensProp('isbn13');
    static editionLens = R.lensProp('edition');
    static authorsLens = R.lensProp('authors');
    static collaboratorsLens = R.lensProp('collaborators');
    static publisherLens = R.lensProp('publisher');
    static placeOfPublicationLens = R.lensProp('placeOfPublication');
    static dateOfPublicationLens = R.lensProp('dateOfPublication');
    static titleLens = R.lensProp('title');
    static subtitleLens = R.lensProp('subtitle');
    static pagesLens = R.lensProp('pages');
    static languageLens = R.lensProp('language');
    static customFieldsLens = R.lensProp('customFields');

    // Getter lenses
    static readTitle = (book: Book) => R.view(Book.titleLens, book);

    Setter lenses
        static updateTitle = (book: Book, title: Option<string>) =>  {
        R.set(Book.titleLens, title, book)
    };

     */

    private static titleLensMonocle =  Lens.fromProp<Book>()('title');


    static updateTitle: (book: Book, newTitle: string) => Book =
        (book: Book, newTitle: string) => Book.titleLensMonocle.set(some(newTitle))(book);

    static readTitle: (book: Book) => any = (book: Book) => Book.titleLensMonocle.get(book);

}