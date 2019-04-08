
/*
Akte (File)
https://www1.citavi.com/sub/manual6/de/index.html?file.html
https://www1.citavi.com/sub/manual6/en/index.html?file.html
 */

/**
 *
 * {@link https://aktenkunde.hypotheses.org/289}
 * @param typeOfFile - Typ des Schriftstücks
 * @param contextOfFile - Form und Funktion, die als Kontext der Textinformation für die Quellenkritik entscheidend sind
 * @param volume - Umfang der Akte
 */

import {Option} from "fp-ts/lib/Option";

interface File {
    id: string
    identifier: Option<string>
    typeOfFile: Option<string>
    authorsOfFile: Option<Array<string>>
    receiverOfFile: Option<string>
    contextOfFile: Option<string>
    dateOfPublication: Option<Date>
    organization: Option<string>
    pages: Option<number>
    fileNumber: Option<number>
    volume: Option<number>
    onlineAddress: Option<string>
    title: Option<string>
    customFields: Option<Array<Map<string,string>>>
}