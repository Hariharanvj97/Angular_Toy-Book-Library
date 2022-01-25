import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LendItems } from '../../model/model/LendItems'; 
import { LenditemsService } from '../lenditems.service';

@Component({
  selector: 'app-delete-items',
  templateUrl: './delete-items.component.html',
  styleUrls: ['./delete-items.component.css']
})
export class DeleteItemsComponent implements OnInit {
  lendForm:FormGroup;
  isUpdate:boolean=false;
  LendItems: LendItems[];
  data: string;

  constructor(private fb: FormBuilder, private service: LenditemsService,private route: ActivatedRoute,private route2: Router) { 
  }
  ngOnInit(): void {
    this.LendItems = this.route.snapshot.data['students'];
    this.service.getAllLendItems().subscribe(
      data => { this.LendItems = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5
      );
    }
   
// Delete Student
deleteLend(lendItems: LendItems): void {
  let result = confirm('Do you want to delete the student?')
  if (result) {
    this.service.deleteLendItems(lendItems.lendId)
      .subscribe(data => {
        this.LendItems = this.LendItems.filter(s => s !== lendItems);
      });
  }
};

// Modify Student
editLend(lendItems: LendItems): void {
  localStorage.removeItem("editLendId");
  localStorage.setItem("editLendId", lendItems.lendId.toString());
  this.route2.navigate(['/lendput']);
};

}

