

/*
https://www1.citavi.com/sub/manual5/de/court_decision.html
scli: https://de.wikipedia.org/wiki/European_Case_Law_Identifier
 */

import {Option} from "fp-ts/lib/Option";

/**
 * {@link http://www.citethisforme.com/cite/book}
 */
interface CourtDecision {
    id: string
    onlineAddress: Option<string>
    accessDate: Option<Date>
    dateOfDecision: Option<Date>
    court: Option<string>
    source: Option<string>
    issueNumber: Option<string>
    pageRange: Option<string>
    sections: Option<Array<string>>
    fileNumber: Option<string>
    typeOfDecision: Option<string>
    ecli: Option<string>
    shortDescription: Option<string>
    parallelSources: Option<Array<string>>
    customFields: Option<Array<Map<string,string>>>
    coverFilePath: string
}