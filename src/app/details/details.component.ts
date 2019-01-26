import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-details-component',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() book : Book;
  constructor(private bookService : BookService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get("id");

    this.bookService.getBook(id)
      .subscribe(book => { this.book = book; });
  }
  goBack(): void {
    this.location.back();
  }
  editBook(id: number): void {
    this.location.go("edit/" + id);
  }
}
