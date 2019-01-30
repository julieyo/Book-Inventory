import { Component, OnInit, Input } from '@angular/core';
import {SearchResult} from '../search-result';

@Component({
  selector: 'app-results-component',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() results : SearchResult[];

  constructor() { }

  ngOnInit() {

  }
}
