import {Option} from "fp-ts/lib/Option";

/*
https://www1.citavi.com/sub/manual6/de/index.html?contribution_in_legal_commentary.html
 */
interface LegalCommentary {
    id: string
    author: Option<string>
    date: Option<Date>
    pageRange: Option<string>
    title: Option<string>
    paragraph: Option<string>
    volume: Option<string>
    customFields: Option<Array<Map<string,string>>>
    coverFilePath: string
}

