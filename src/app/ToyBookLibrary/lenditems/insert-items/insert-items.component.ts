import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LenditemsService } from '../lenditems.service';
import { Book } from '../../model/model/book';
import { Child } from '../../model/model/Child';
import { Toy } from '../../model/model/toy'; 
import { LendItems } from '../../model/model/LendItems'; 
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-insert-items',
  templateUrl: './insert-items.component.html',
  styleUrls: ['./insert-items.component.css']
})
export class InsertItemsComponent implements OnInit {
  lendForm: FormGroup;
  isUpdate:boolean=false;
  LendItems:any;
  constructor(private fb: FormBuilder, private service:LenditemsService, private router:Router) {
    this.LendItems= new Array();
   }

  ngOnInit(): void {
    this.lendForm = this.fb.group({
      lendId: ['', Validators.required],
      lendDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      fine: ['', Validators.required],
      bookId: ['', Validators.required],
      childId: ['', Validators.required],
      toyId: ['', Validators.required],
      
    });
    this.service.getAllLendItems()
      .subscribe(data=> this.LendItems = data);
  }
//   insertItems(): void {
//   let book:Book = new Book(this.lendForm.controls['bookId'].value);
//   let child:Child = new Child(this.lendForm.controls['userId'].value);
//   let toy:Toy = new Toy(this.lendForm.controls['toyId'].value);

//   let lendItems:LendItems = new LendItems(this.lendForm.controls['lendId'].value, 
//     this.lendForm.controls['lendDate'].value, 
//     this.lendForm.controls['returnDate'].value,this.lendForm.controls['fine'].value, book,child,toy);
//     if(this.isUpdate==false)
//     this.service.insertItems(LendItems).subscribe(data => {
//       alert('LendItems Data Added.');
//       this.lendForm.markAsPristine();
//       this.router.navigate(['view-items']);
//     })
//   }
// }
  insertItems(): void {
    let book:Book = new Book(this.lendForm.controls['bookId'].value);
   let child:Child = new Child(this.lendForm.controls['childId'].value);
  let toy:Toy = new Toy(this.lendForm.controls['toyId'].value);

  let lendItems:LendItems = new LendItems(this.lendForm.controls['lendId'].value, 
   this.lendForm.controls['lendDate'].value, 
    this.lendForm.controls['returnDate'].value,this.lendForm.controls['fine'].value,book,child,toy);
    //logic for saving the book
    if(this.isUpdate==false){
      this.service.insertItems(lendItems).subscribe(data => {
        alert("LendItems with Id " + data.lendId + " is created");
        this.service.getAllLendItems().subscribe(bks => {
          this.LendItems = bks;
        });
      },err => {console.log(err)});
    }

    //updating the book
    else{
      
      this.service.updateLendItems(LendItems).subscribe(data => {
        alert("Lend  is Updated");
        this.service.getAllLendItems().subscribe(bks => {
          this.LendItems = bks;
             });
      });
      this.isUpdate=false;
    }
    this.lendForm.reset();
    
  }
  }