import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  
  bookForm: FormGroup;
  isUpdate:boolean=false;
  books: Book[];
  constructor(private fb: FormBuilder, private service:BookService, private router:Router, private  route: ActivatedRoute, private route2: Router) {
    this.books= new Array();
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      bookId: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      publication: ['', Validators.required],
      availablebooks: ['', Validators.required]
    });

    //show data into table after component is loaded
    this.service.getAllBook().subscribe(
      data => { this.books = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5

      );
    }
    editBook(bk: Book): void {
      localStorage.removeItem("editbookId");
      localStorage.setItem("editbookId", bk.bookId.toString());
      this.route2.navigate(['update-book']);
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