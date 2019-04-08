import {Option} from "fp-ts/lib/Option";
import {Journal} from "./Journal";

/**
 * {@link https://www1.citavi.com/sub/manual6/en/index.html?statute_or_regulation.html}
 * {@link https://de.wikipedia.org/wiki/Zust%C3%A4ndigkeit}
 * {@link https://www.law.cornell.edu/wex/title_legislation}
 * {@link https://support.citavi.com/forum/viewtopic.php?f=96&t=14826}
 * {@link https://www.law.ox.ac.uk/sites/files/oxlaw/oscola_4th_edn_hart_2012.pdf}
 * @param revises - Revised
 * @param jurisdiction - Ger: Jurisdiktion: Zuständigkeit welche Behörde/Gericht im Einzelfall rechtlich zu hoheitlichem Handeln ermächtigt und gegebenenfalls verpflichtet ist.
 * @param titleOfStatuteAct - Titel der Satzung / Gesetz: Baugesetzbuch
 * @param shortTitleOfStatuteAct - BauGB
 * @param sectionNumbers - e.g Title VII of the Civil Rights Act
 * @param legislature - Gesetzgeb. / Behörde
 * @param periodical - alias Journal, Zeitschrift
 * @param issueNumber - Aufsatznummer*
 * @param onlineAddress - URL im E-Periodical: eigenen Datentyp verwenden
 * @param publisher - Verlag
 * @param source - Fundstelle
 *

 */

interface Legislation {
    id: string
    date: Date
    revised: Option<string>
    titleOfStatuteAct: Option<string>
    shortTitleOfStatuteAct: Option<string>
    jurisdiction: Option<string>
    legislature: Option<string>
    abbreviationLegislature: Option<string> // evtl. Map<string, string> nutzen
    referenceToAnAct: Option<Array<string>>
    sectionNumbers: Option<Array<string>>
    periodical: Option<Journal>
    issueNumber: Option<string>
    onlineAddress: Option<string>
    accessDate: Option<Date>
    pageRange: Option<string>
    publisher: Option<string>
    source: Option<string>
    title: Option<string>
    abbreviation: Option<string>
    volume: Option<string>
}