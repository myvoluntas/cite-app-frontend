import {BookService} from "../BookService";
import {Book} from "../../model/documents/Book";

export class BookServiceInterpreter implements BookService<Book>{

    cite(book: Book): void{
        console.log(Book.readTitle(book))
    }
}