import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Child } from '../../model/child'; 
import { ChildService } from '../child.service';


@Component({
  selector: 'app-delete-child',
  templateUrl: './delete-child.component.html',
  styleUrls: ['./delete-child.component.css']
})
export class DeleteChildComponent implements OnInit {

  childForm: FormGroup;
  childs:Child [];

  constructor(private fb: FormBuilder, private service: ChildService) { 
    this.childs= new Array();
  }

 
    ngOnInit(): void {
      //this.admins = this.route.snapshot.data['admins'];
      this.service.getAllChild().subscribe(
        data => { this.childs = data;}, //this success handler works only if status code between 200 and 299
        err => {console.log(err)}  //this success handler works only if status code between 4 and 5
        
       );
    }

deleteChild(childId: number) {
  let candelete = confirm(`Are you Sure to Delete Child record '${childId}'`);
  if (candelete==true) {
    this.service.deleteChild(childId).subscribe(data => {
      alert("Deleted Scuccessfully");
      this.service.getAllChild().subscribe(chd => {
        this.childs = chd;
      });
    });
}
}
}
