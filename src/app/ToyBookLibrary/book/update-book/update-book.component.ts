import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

 
  bookForm: FormGroup;
  books: Book[];
  isUpdate:boolean=false;
  bookId: any;
  
 

  constructor(private fb: FormBuilder, private service: BookService, private route:Router, private router:ActivatedRoute) { }
 
  
  
  ngOnInit(): void {
    
    this.bookForm = this.fb.group({
      bookId: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      publication: ['', Validators.required],
      availablebooks: ['', Validators.required],
    });

    
    this.service.getBookById(+localStorage.getItem("editbookId"))
      .subscribe( data => {
       
        this.bookForm.setValue(data);
      });
      }

      updateBook() {
        let bk:Book = new Book(
          this.bookForm.controls['bookId'].value,
       
          this.bookForm.controls['title'].value,
        
          this.bookForm.controls['price'].value,
        
          this.bookForm.controls['author'].value,
        
          this.bookForm.controls['category'].value,
        
          this.bookForm.controls['publication'].value,
        
          this.bookForm.controls['availablebooks'].value
          );
        
        
        this.service.updateBook(bk)
          //.pipe(first())
          .subscribe(
            data => { 
             confirm("Are you sure to make changes?");
              this.route.navigate(['/getAllBook']);
              
            });
      }
    }