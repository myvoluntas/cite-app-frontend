
/*
Akte (File)
https://www1.citavi.com/sub/manual6/de/index.html?file.html
https://www1.citavi.com/sub/manual6/en/index.html?file.html
 */

import {Option} from "fp-ts/lib/Option";

interface File {
    id: string
    authors: Option<Array<string>>
    recipient: Option<string>
    dateOfPublication: Option<Date>
    organization: Option<string>
    pages: Option<number>
    fileNumber: Option<number>
    extent: Option<number>
    onlineAddress: Option<string>
    title: Option<string>
    titleSupplement: Option<string>
    customFields: Option<Array<Map<string,string>>>
    coverFilePath: string
}