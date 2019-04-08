



/**
 * Beitrag in ... e.g. Blog, Tweet
 * {@link https://www1.citavi.com/sub/manual6/en/index.html?contribution.html}
 * {@link https://www1.citavi.com/sub/manual6/de/index.html?contribution.html}
 * {@link http://www.citethisforme.com/cite/blog}
 *
 * @param
 */

import {Option} from "fp-ts/lib/Option";
import {Person} from "../utility/common";

interface Contribution {
    accessDate: Option<Date>
    authors:Option<Array<Person>>
    collaborators: Option<Array<string>>
    dateOfContribution: Option<Date>
    onlineAddress: Option<string>
    pageRange: Option<string>
    postTitle: Option<string>
    subtitle: Option<string>
    titleSupplement: Option<string>
    volume: Option<number>
    customFields: Option<Array<Map<string,string>>>
}

