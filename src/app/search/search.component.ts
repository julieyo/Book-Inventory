import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { SearchResult } from '../search-result';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results : SearchResult[];
  searchField : FormControl;
  term : string;
  constructor(private bookService: BookService, 
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.searchField = new FormControl();
    //TODO: switchMap and takeUntil (introduce paging for large results)
    this.searchField.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((t :string) => {
        let term = t || "";
        this.getBooks(term);
        this.location.replaceState("search/" + term)
      });
    // keep track of search term from the previous visit in the url
    this.route.paramMap.subscribe(params => 
      { 
        this.term = params.get("t");
        this.searchField.setValue(this.term);
      });
  }

  getBooks(searchTerm: string) : void {
    this.bookService.search(searchTerm)
      .subscribe(results => this.results = results);
  }
}
