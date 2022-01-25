import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LendItems } from '../../model/model/LendItems';
import { LenditemsService } from '../lenditems.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
 lendForm:FormGroup;
lenditems: LendItems[];
isUpdate:boolean=false;
lendItems!: any[];
 
constructor(private fb: FormBuilder, private service:LenditemsService, private router:Router) {
  this.lenditems= new Array();
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

  this.service.getAllLendItems().subscribe(
    data=> {this.lenditems = data;},
    err  => {console.log(err)}
    );
}

}
