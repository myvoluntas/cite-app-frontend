import { Option, some, none } from 'fp-ts/lib/Option';

import {Person} from "../utility/common";
import {Lens} from "monocle-ts";
import uuid4 from "uuid/v4";

/*
Notes
- Cant implement properties of an interface as static methods in class: interface BookLens -> class Book
https://www1.citavi.com/sub/manual6/de/index.html?book.html
https://www1.citavi.com/sub/manual6/de/index.html?edited_book.html
 */

type UUIDIV = string // https://github.com/kelektiv/node-uuid#readme
export type BookId = string
export enum TypeOfBook{
    Monograph,
    BookEdited
}

interface BookInterface {
    id: BookId
    accessDate: Option<Date> // onlineAddress
    onlineAddress: Option<string>
    typeOfBook: TypeOfBook
    isbn10: Option<string>
    isbn13: Option<string>
    volume: Option<number>
    numberOfVolumes: Option<string>
    edition: Option<number>
    seriesTitle: Option<string>
    authors: Option<Array<Person>>
    collaborators: Option<Array<Person>>
    institution: Option<string>
    publisher: Option<string>
    placeOfPublication: Option<string>
    dateOfPublication: Option<string>
    title: Option<string>
    subtitle: Option<string>
    pages: Option<number>
    language: Option<string>
    customFields: Option<Array<Map<string,string>>>
    coverFilePath: string
}

export class Book implements BookInterface {
    constructor(readonly id: BookId = uuid4(),
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
                readonly customFields: Option<Array<Map<string,string>>>,
                readonly coverFilePath: string) {}

    // Lenses
    private static typeOfBookLens = Lens.fromProp<Book>()('typeOfBook');
    private static isbn10Lens = Lens.fromProp<Book>()('isbn10');
    private static isbn13Lens = Lens.fromProp<Book>()('isbn13');
    private static editionLens = Lens.fromProp<Book>()('edition');
    private static authorsLens = Lens.fromProp<Book>()('authors');
    private static collaboratorsLens = Lens.fromProp<Book>()('collaborators');
    private static publisherLens = Lens.fromProp<Book>()('publisher');
    private static placeOfPublicationLens = Lens.fromProp<Book>()('placeOfPublication');
    private static dateOfPublicationLens = Lens.fromProp<Book>()('dateOfPublication');
    private static titleLens =  Lens.fromProp<Book>()('title');
    private static subtitleLens = Lens.fromProp<Book>()('subtitle');
    private static pagesLens = Lens.fromProp<Book>()('pages');
    private static languageLens = Lens.fromProp<Book>()('language');
    private static customFieldsLens = Lens.fromProp<Book>()('customFields');
    private static coverFilePathLens = Lens.fromProp<Book>()('coverFilePath');


    //Setter
    static updateTypeOfBook: (book: Book, newTypeOfBook: TypeOfBook) => Book =
        (book: Book, newTypeOfBook: TypeOfBook) => Book.typeOfBookLens.set(newTypeOfBook)(book);

    static updateIsbn10: (book: Book, newIsbn10: Option<string>) => Book =
        (book: Book, newIsbn10: Option<string>) => Book.isbn13Lens.set(newIsbn10)(book);

    static updateIsbn13: (book: Book, newIsbn13: Option<string>) => Book =
        (book: Book, newIsbn13: Option<string>) => Book.isbn10Lens.set(newIsbn13)(book);

    static updateEdition: (book: Book, newEdition: Option<number>) => Book =
        (book: Book, newEdition: Option<number>) => Book.editionLens.set(newEdition)(book);

    static updateAuthors: (book: Book, newAuthors: Option<Array<Person>>) => Book =
        (book: Book, newAuthors: Option<Array<Person>>) => Book.authorsLens.set(newAuthors)(book);

    static updateCollaborators: (book: Book, newIsbn10: Option<Array<Person>>) => Book =
        (book: Book, newCollaborators: Option<Array<Person>>) => Book.collaboratorsLens.set(newCollaborators)(book);

    static updatePublisher: (book: Book, newPublisher: Option<string>) => Book =
        (book: Book, newPublisher: Option<string>) => Book.publisherLens.set(newPublisher)(book);

    static updateplaceOfPublication: (book: Book, newPlaceOfPublication: Option<string>) => Book =
        (book: Book, newPlaceOfPublication: Option<string>) => Book.placeOfPublicationLens.set(newPlaceOfPublication)(book);

    static updateDateOfPublication: (book: Book, newIsbn10: Option<string>) => Book =
        (book: Book, newDateOfPublication: Option<string>) => Book.dateOfPublicationLens.set(newDateOfPublication)(book);

    static updateTitle: (book: Book, newTitle: Option<string>) => Book =
        (book: Book, newTitle: Option<string>) => Book.titleLens.set(newTitle)(book);

    static updateSubtitle: (book: Book, newSubtitle: Option<string>) => Book =
        (book: Book, newSubtitle: Option<string>) => Book.subtitleLens.set(newSubtitle)(book);

    static updatePages: (book: Book, newPages: Option<number>) => Book =
        (book: Book, newPages: Option<number>) => Book.pagesLens.set(newPages)(book);

    static updateLanguage: (book: Book, newLanguage: Option<string>) => Book =
        (book: Book, newLanguage: Option<string>) => Book.languageLens.set(newLanguage)(book);

    static updateCustomFields: (book: Book, newCustomFields: Option<Array<Map<string, string>>>) => Book =
        (book: Book, newCustomFields: Option<Array<Map<string,string>>>) => Book.customFieldsLens.set(newCustomFields)(book);

    static updateCoverFilePath: (book: Book, newCover: string) => Book =
        (book: Book, newCover: string) => Book.coverFilePathLens.set(newCover)(book);

    // Reader
    static readTypeOfBook =
        (book: Book) => Book.typeOfBookLens.get(book);

    static readIsbn10 =
        (book: Book) => Book.isbn10Lens.get(book);

    static readIsbn13 =
        (book: Book) => Book.isbn13Lens.get(book);

    static readEdition =
        (book: Book) => Book.editionLens.get(book);

    static readAuthors =
        (book: Book) => Book.authorsLens.get(book);

    static readCollaborators =
        (book: Book) => Book.collaboratorsLens.get(book);

    static readPublisher =
        (book: Book) => Book.publisherLens.get(book);

    static readPlaceOfPublication =
        (book: Book) => Book.placeOfPublicationLens.get(book);

    static readDateOfPublication =
        (book: Book) => Book.dateOfPublicationLens.get(book);

    static readTitle =
        (book: Book) => Book.titleLens.get(book);

    static readSubtitle0 =
        (book: Book) => Book.subtitleLens.get(book);

    static readPages =
        (book: Book) => Book.pagesLens.get(book);

    static readLanguage =
        (book: Book) => Book.languageLens.get(book);

    static readCustomFields =
        (book: Book) => Book.customFieldsLens.get(book);

    static readCoverFilePath =
        (book: Book) => Book.coverFilePathLens.get(book)


    /*
    with lens generator
    static lensgenerator = (prop: Book[Book]) => Lens.fromProp<Book>()(prop);
    static readIsbn13 = (book: Book, prop: Book[Book]) => Book.lensgenerator(prop).get(book)
     */

}