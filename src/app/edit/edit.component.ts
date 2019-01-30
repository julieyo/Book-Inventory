import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
import { DialogService } from '../dialog.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],

  providers: [DialogService]
})
export class EditComponent implements OnInit {
  @Input() book : Book;
  editForm = new FormGroup({
    availability: new FormControl(''),
    shipping: new FormControl('')
  });
  constructor(private bookService : BookService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get("id");

    this.bookService.getBook(id)
      .subscribe(book => { this.book = book; });
  }
  goBack(content): void {
    // uses canDeactivate to check whether form is dirty
    console.log("edit back");
    this.location.back();
  }

  // openModal(content) {
  //   const modalRef = this.modalService.open(content);
  // }//TODO: fix this!
  onSubmit(): void  {
    console.log("onSubmit");
    let saved = false;
    this.editForm.value.id = this.book.id;
    this.bookService.save(this.editForm.value)
    .subscribe(saved => {
       if (saved) {
         let value = this.editForm.value;
         this.editForm.reset();  // to set back to pristine
         this.location.back();
         // TODO: display toast that message is saved
       } else {
         // TODO: error message that changes could not be saved.
       }
    });
  }
 
  canDeactivate() : Observable<boolean> | boolean {
    if (this.editForm.dirty || this.editForm.touched) {
      return this.dialogService.confirm("You have unsaved edits. Leave page without saving?");
    }
    return true;
  }
}
