import { Option, some, none } from 'fp-ts/lib/Option';

import * as R from 'ramda'
import v1 from 'uuid/v1';
import {Person} from "./common";


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
    constructor(private _id: UUIDIV,
                private _typeOfBook: TypeOfBook,
                private _isbn10: Option<string>,
                private _isbn13: Option<string>,
                private _edition: Option<number>,
                private _authors: Option<Array<Person>>,
                private _collaborators: Option<Array<Person>>,
                private _publisher: Option<string>,
                private _placeOfPublication: Option<string>,
                private _dateOfPublication: Option<string>,
                private _title: Option<string>,
                private _subtitle: Option<string>,
                private _pages: Option<number>,
                private _language: Option<string>,
                private _customFields: Option<Array<Map<string,string>>>) {}

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

    //todo
    static updateField (props: string): void {
        return console.log('implement me: updateField, but change the return type to Book')
    }

}
