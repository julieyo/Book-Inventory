import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
//import { Http, Headers, Response } from "@angular/http";
//import "rxjs/add/operator/toPromise";

import { Book } from "./book";
import { BOOKS } from "./mock-books";
@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor() {}
    getBooks(): Observable<Book[]> {
        return of(BOOKS);
    }

    getBook(id: number): Observable<Book> {
        return of(BOOKS.find(book => book.id === id));
    }
    
//   constructor(private http: Http) { }

//   list() {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");

//     return this.http.get("http://pokeapi.co/api/v2/pokedex/2/", {
//       headers: headers
//     })
//     .toPromise()
//     .then((res: Response) => {
//       let data = res.json();
//       let allbook = [];

//       data.book_entries.forEach((entry) => {
//         let book = new Book();
//         book.name = entry.book_species.name;
//         book.id = entry.entry_number;
//         allbook.push(book);
//       });

//       return allbook;
//     })
//     .catch(this.handleError);
//   }

//   private handleError (error: Response | any) {
//     let errMsg: string;
//     if (error instanceof Response) {
//       const body = error.json() || "";
//       const err = body.error || JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
//     } else {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.error(errMsg);
//     return Promise.reject(errMsg);
//   }
}