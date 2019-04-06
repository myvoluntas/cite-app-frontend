import {BookId} from "./documents/Book";
import {Option} from "fp-ts/lib/Option";

type LinkId = string

enum Rating {
    Negative,
    Neutral,
    Positive
}

interface Link {
    id: LinkId
    referenceFrom: Option<BookId>
    referenceTo: Option<BookId>
    pageRange: Option<string>
    chapter: Option<string>
    typeOfLink: Rating
    notes: Option<Array<string>>
}