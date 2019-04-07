

/*
Beitrag in...
https://www1.citavi.com/sub/manual6/en/index.html?contribution.html
https://www1.citavi.com/sub/manual6/de/index.html?contribution.html
 */

import {Option} from "fp-ts/lib/Option";

interface Contribution {
    accessDate: Option<Date>
    authors:Option<Array<string>>
    collaborators: Option<Array<string>>
    dateOfContribution: Option<Date>
    onlineAddress: Option<string>
    pageRange: Option<string>
    title: Option<string>
    subtitle: Option<string>
    titleSupplement: Option<string>
    volume: Option<number>
    customFields: Option<Array<Map<string,string>>>
    coverFilePath: string
}

