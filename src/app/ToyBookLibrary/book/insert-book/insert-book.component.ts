import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../model/book'; 
import { BookService } from '../book.service';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent implements OnInit {

  bookForm: FormGroup;
  isUpdate:boolean=false;
  books: Book[];
 
  constructor(private fb: FormBuilder, private service:BookService, private router:Router) {
    this.books= new Array();
  }


  ngOnInit() {

    console.log("ng on init");
    this.bookForm = this.fb.group({
      
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
  insertBook(): void {
    let bk:Book=this.bookForm.value;
        //logic for saving the book
        if(this.isUpdate==false){
          this.service.insertBook(bk).subscribe(data => {
            alert("Book with Id " + data.bookId + " is created");
            this.service.getAllBook().subscribe(bks => {
              this.books = bks;
            });
          },err => {console.log(err)});
        }



  }

}
