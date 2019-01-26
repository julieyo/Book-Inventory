import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {Book} from '../book';
@Component({
  selector: 'app-results-component',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  books : Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }
  
  getBooks() : void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

}
