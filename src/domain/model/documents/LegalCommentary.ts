import {Option} from "fp-ts/lib/Option";
import {Person} from "../utility/common";

/*
https://www1.citavi.com/sub/manual6/de/index.html?contribution_in_legal_commentary.html
 */
/**
 * {@link https://help.citavi.com/knowledge-base/article/juristisches-zitieren-thomas-riehm}
 * {@link https://www.niederle-media.de/Zitieren.pdf}
 * {@link https://de.wikipedia.org/wiki/Zitieren_von_Rechtsnormen}
 *
 * @param marginalNumber - Randnummer
 * @param nameOfLow - Baugesetzbuch
 * @param abbreviationOfLow - BauGB
 *
 */

interface LegalCommentary {
    id: string
    author: Option<Person>
    date: Option<Date>
    pageRange: Option<string>
    title: Option<string>
    titleOfStatuteAct: Option<string>
    shortTitleOfStatuteAct: Option<string>
    paragraph: Option<Array<string>>
    marginalNumber: Option<string>
    volume: Option<string>
    customFields: Option<Array<Map<string,string>>>
}

