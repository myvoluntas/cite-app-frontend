import {Option} from "fp-ts/lib/Option";
import {Book, BookId} from "./documents/Book";

type Context = string // todo groups, tags,..

type book_id = string
type other_id = string
type domain_id = book_id | other_id // todo domain to implement
type context_id = string

enum Kind {
    DirectQuotation,
    IndirectQuotation,
    ImageOrFileQuotation,
    Summary,
    TextForm,
    Comment,
    ImageOrFileIdea,
    TextFormIdea
}
interface KnowledgeElement {
    // Summary
    knowledgeElement_id: string
    reference_id: BookId | domain_id
    context_id: Option<context_id>
    kind: Kind
    coreStatement: Option<string>
    knowledge: Option<Array<string>>
    pageRange: Option<string>
    //for images and files
    caption: Option<string> // Bildunterschrift
    path: Option<string>
}

