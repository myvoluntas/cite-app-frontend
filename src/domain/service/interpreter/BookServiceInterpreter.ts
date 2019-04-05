import {BookService} from "../BookService";
import {Book} from "../../model/Book";
import {BookLenses} from "../../model/lenses/BookLenses";

export class BookServiceInterpreter implements BookService<Book>{

    cite(book: Book): void{
        console.log(BookLenses.viewTitle(book))
    }
}