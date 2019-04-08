import {Option} from "fp-ts/lib/Option";
/*
https://www1.citavi.com/sub/manual5/de/map.html
https://www1.citavi.com/sub/manual5/en/map.html
*/


interface Map <A,B> {
    id: string
    cartographer: Option<string>
    dateOfPublication: Option<string>
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
    customFields: Option<Array<Map<A,B>>>
    coverFilePath: string
}