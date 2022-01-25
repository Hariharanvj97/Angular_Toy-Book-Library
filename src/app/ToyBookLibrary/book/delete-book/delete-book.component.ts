import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../../model/book'; 
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  bookForm: FormGroup;
  isUpdate:boolean=false;
  books: Book[];
  router: any;

  constructor(private fb: FormBuilder, private service: BookService, private  route: ActivatedRoute, private route2: Router) { 
    this.books= new Array();
  }

  ngOnInit(): void {

     //this.admins = this.route.snapshot.data['admins'];
     this.service.getAllBook().subscribe(
      data => { this.books = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5
      
     );
  }

  editBook(bk: Book): void {
    localStorage.removeItem("editbookId");
    localStorage.setItem("editbookId", bk.bookId.toString());
    this.route2.navigate(['updateBook']);
  };
  deleteBook(bookId: number) {
    let candelete = confirm(`Are you Sure to Delete Book record '${bookId}'`);
    if (candelete==true) {
      this.service.deleteBook(bookId).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllBook().subscribe(bks => {
          this.books = bks;
        });
      });
  }
  

}
}
