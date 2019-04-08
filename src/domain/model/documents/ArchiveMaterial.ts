import {Option} from "fp-ts/lib/Option";
import {Person} from "../utility/common";

/*
Archivgut
https://www1.citavi.com/sub/manual6/en/index.html?archive_material.html
https://www1.citavi.com/sub/manual6/de/index.html?archive_material.html
 */

/**
 * {@link http://www.citethisforme.com/cite/archive-material}
 *
 * @param sourceDescription - The document type. Eg. Manuscript, Lettter etc
 * @param availableVia - The name of university, library, archive or repository
 * @param collection - The collection name, code, or number
 */

interface ArchiveMaterial {
    id: string
    accessDate: Option<Date>
    author: Option<Person>
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

    availableVia: Option<Array<string>>
    collection: Option<string>
}
