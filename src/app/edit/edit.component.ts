import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
     // TODO: detect dirty form and ask user if they really want to leave
    this.location.back();
  }
  saveBook(): void {
    // TODO: add save to book service and pass new variables to it...
    //this.location.go("details/" + id);
  }

}
