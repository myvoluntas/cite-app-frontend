/*
Agenturmeldung (NewsAgencyReport)
https://www1.citavi.com/sub/manual6/de/index.html?news_agency_report.html
 */

import {Option} from "fp-ts/lib/Option";

/**
 * Defines the contract for a News agency report | GER: Agenturmeldung.
 * {@link https://www1.citavi.com/sub/manual6/en/index.html?news_agency_report.html}
 * {@link http://www.citethisforme.com/cite/press-release}
 *
 * @param id - The generated uuid4()
 * @param dateAccessed - The date a work `onlineAddress` was accessed/reviewed online: 'Zuletzt geprüft am'
 * @param author - Verfasser steht hinter einer juristischen Person GmbH
 * @param collaborators - not relevant, there is no collaborators
 * @param newsEmbargo - Sperrfrist
 * @agency agency - Die juristische Person des des 'author' `corporate author
 */

interface NewsAgencyReport {
    id: string
    dateAccessed: Date
    // author: Option<string>
    //collaborators: Option<Array<string>>
    dateOfPublication: Date
    onlineAddress: Option<string>
    placeOfPublication: Option<string>
    agency: Option<string>
    newsEmbargo: Option<Date> // Sperrfrist
    title: Option<string>
    subtitle: Option<string>
    titleSupplement: Option<string>
    customFields: Option<Array<Map<string,string>>>
    coverFilePath: string
}