/*
Agenturmeldung (NewsAgencyReport)
https://www1.citavi.com/sub/manual6/de/index.html?news_agency_report.html
 */

import {Option} from "fp-ts/lib/Option";

interface NewsAgencyReport {
    id: string
    accessDate: Date
    authors: Option<string>
    collaborators: Option<Array<string>>
    dateOfPublication: Date
    onlineAddress: Option<string>
    placeOfPublication: Option<string>
    publishers: Option<string>
    newsEmbargo: Option<Date> // Sperrfrist
    title: Option<string>
    subtitle: Option<string>
    titleSupplement: Option<string>
    customFields: Option<Array<Map<string,string>>>
    coverFilePath: string
}