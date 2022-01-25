import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LenditemsService } from '../lenditems.service';
import { Book } from '../../model/model/book';
import { Child } from '../../model/model/Child';
import { Toy } from '../../model/model/toy'; 
import { LendItems } from '../../model/model/LendItems'; 


@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent implements OnInit {
  lendForm:FormGroup;
  isUpdate:boolean=false;
  LendItems:any;
  lendId:[]

  constructor(private fb: FormBuilder, private service: LenditemsService, private router: Router) {
    this.LendItems= new Array();
  }

  ngOnInit() {
    alert('UpdateLendItemsComponent');

    this.lendForm = this.fb.group({
      lendId: ['', Validators.required],
      lendDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      fine: ['', Validators.required],
      bookId: ['', Validators.required],
      childId: ['', Validators.required],
      toyId: ['', Validators.required],
    });

    this.service.getById(+localStorage.getItem("editAdminId"))
    .subscribe( data => {
      this.lendForm.setValue(data);
    });
    }
    updateLendItems() {
      //this.submitted = true;
      if (this.lendForm.invalid) {
        return;
      }
      let book:Book = new Book(this.lendForm.controls['bookId'].value);
       let child:Child = new Child(this.lendForm.controls['childId'].value);
       let toy:Toy = new Toy(this.lendForm.controls['toyId'].value);
    
       let lendItems:LendItems = new LendItems(this.lendForm.controls['lendId'].value, 
      this.lendForm.controls['lendDate'].value, 
       this.lendForm.controls['returnDate'].value,this.lendForm.controls['fine'].value,book,child,toy);
       this.service.updateLendItems(lendItems)
      //.pipe(first())
      .subscribe(
        data => { 
         confirm("Are you sure to make changes?");
          this.router.navigate(['/lendlist']);
          
        });
    }
}