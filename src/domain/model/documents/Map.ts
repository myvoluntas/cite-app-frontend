import {Option} from "fp-ts/lib/Option";


interface Map {
    id: string
    cartographer: Option<string>
    date: Option<string>
    edition: Option<string>
    isbn10: Option<string>
    isbn13: Option<string>
    scale: Option<string>
    onlineAddress: Option<string>
    placeOfPublication: Option<string>
    publisher: Option<string>
    title: Option<string>
    subtitle: Option<string>
    titleSupplement: Option<string>
}