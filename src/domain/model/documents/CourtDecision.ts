import {Option} from "fp-ts/lib/Option";

/**
 * {@link http://www.citethisforme.com/cite/book}
 * {@link https://en.wikipedia.org/wiki/Case_citation}
 * {@link https://de.wikipedia.org/wiki/European_Case_Law_Identifier}
 * {@link https://www1.citavi.com/sub/manual5/de/court_decision.html}
 *
 * @param court - Court that issued the decision
 */
interface CourtDecision {
    id: string
    onlineAddress: Option<string>
    accessDate: Option<Date>
    dateOfDecision: Option<Date>
    court: Option<string>
    abbreviatedTitleOfCourt: Option<string>
    source: Option<string>
    decisionNumber: Option<string>
    reportAbbreviationCode: Option<string>
    pageRange: Option<string>
    sections: Option<Array<string>>
    paragraphNumber: Option<Array<string>>
    volumeNumber: Option<string>
    fileNumber: Option<string>
    typeOfDecision: Option<string>
    ecli: Option<string>
    shortDescription: Option<string>
    parallelSources: Option<Array<string>>
    customFields: Option<Array<Map<string,string>>>
    coverFilePath: string
}