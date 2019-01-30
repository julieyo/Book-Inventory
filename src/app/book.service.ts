import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { SearchResult} from './search-result';
import { HttpClient } from "@angular/common/http";

import { Book } from "./book";
import { books } from "./mock-books";
import { formatCurrency } from '@angular/common';
@Injectable({
    providedIn: 'root'
})
export class BookService {
    apiUrl: string = '/api/';
    constructor(private http: HttpClient) {}
    
    getBooks(): Observable<Book[]>{
        return this.http.get<Book[]>(this.apiUrl + 'books')
    }
    getBook(id: number): Observable<Book> {
        return this.http.get<Book>(`${this.apiUrl + 'books'}/${id}`);
    }
    // TODO: http post
    search(searchTerm: string): Observable<SearchResult[]> {
        let term = searchTerm.toLocaleLowerCase();
        let matchString = function(value: string): boolean {
            return value && value.toLowerCase().includes(term);
        }
        let response = books;
        //this.getBooks().subscribe(response  => { 
            let results = response.filter(book => {
                return matchString(book.title) ||
                      book.author && book.author.find(a => matchString(a)) ||
                      matchString(book.publisher) ||
                      matchString(book.shipping) ||
                      matchString(book.price.toString()) ||
                      matchString(book.availability.toString())
              }).map(book => {
                  let result = new SearchResult();
                  result.book = book;
                  if (matchString(book.title)) {
                      result.matched = ""; // don't show
                  } else if (book.author && book.author.find(a => matchString(a))) {
                      result.matched = book.author.filter(a => matchString(a)).join(", ");
                  } else if (matchString(book.publisher)) {
                      result.matched = book.publisher;
                  } else if (matchString(book.shipping)) {
                      result.matched = book.shipping;
                  } else if (matchString(book.price.toString())) {
                      result.matched = formatCurrency(book.price, "en-us", "$");
                  } else if (matchString(book.availability.toString())) {
                      result.matched = ""; // don't show
                  }
                  return result;
              });
              return of(results);
       // });
    }

    // TODO: http post
    save(value: Book) : Observable<boolean> {
        let b = books.find(b => b.id === value.id);
        if (value.availability) {
            b.availability = value.availability;
          }
          if (value.shipping) {
            b.shipping = value.shipping;
          }
          return of(true);
    }
}