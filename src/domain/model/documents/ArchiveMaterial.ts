import {Option} from "fp-ts/lib/Option";

/*
Archivgut
https://www1.citavi.com/sub/manual6/en/index.html?archive_material.html
https://www1.citavi.com/sub/manual6/de/index.html?archive_material.html
 */


interface ArchiveMaterial {
    id: string
    accessDate: Option<Date>
    author: Option<string>
    recipient: Option<string>
    dating: Option<Date>
    organization: Option<string>
    signature: Option<string>
    onlineAddress: Option<string>
    pageRange: Option<string>
    placeOfPublication: Option<string>
    placeOfArchive: Option<string>
    title: Option<string>
    sourceDescription: Option<string>
    volume: Option<string>
    period: Option<string>
    customFields: Option<Array<Map<string,string>>>
    coverFilePath: string
}
