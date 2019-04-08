import {Option} from "fp-ts/lib/Option";
/*
https://www1.citavi.com/sub/manual5/de/map.html
https://www1.citavi.com/sub/manual5/en/map.html
 */

/**
 * {@link https://www.geographie.uni-kiel.de/de/studium-lehre/lehre/dokumente-lehre/Zitierregeln.pdf}
 *
 * @param publisher - Institution/Organisation als Herausgeber
 * @param scale - Maßstab
 * @param identifier - like isbn for books
 */

interface Map <A,B> {
    id: string
    identifier: Option<string>
    cartographer: Option<string>
    recordingDate: Option<string>
    dateOfPublication: Option<string>
    edition: Option<string>
    scale: Option<string>
    onlineAddress: Option<string>
    placeOfPublication: Option<string>
    publisher: Option<string>
    title: Option<string>
    subtitle: Option<string>
    titleSupplement: Option<string>
    sensor: Option<string>
    customFields: Option<Array<Map<A,B>>>
}