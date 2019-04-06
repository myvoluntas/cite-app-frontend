import {Book, TypeOfBook} from "../model/documents/Book";
import {some, none} from "fp-ts/lib/Option";
import {Person} from "../model/utility/common";

export const book1 = new Book('12345678hggf', TypeOfBook.Collected, some('1617292249'), some('978-1617292248'),
                        some(1), some([new Person('Debasish', 'Ghosh')]), none,
                        some('Manning Publications'), none, some('October 24, 2016'),
                        some('Functional and Reactive Domain Modeling'),
                        none, some(320), some('English'), none, './path/avatarGenerator');