import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Parent } from '../../model/parent'; 
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-delete-parent',
  templateUrl: './delete-parent.component.html',
  styleUrls: ['./delete-parent.component.css']
})
export class DeleteParentComponent implements OnInit {
  parentForm: FormGroup;
  isUpdate:boolean=false;
  parents: Parent[];

  constructor(private fb: FormBuilder, private service: ParentService) { 
    this.parents= new Array();
  }

  ngOnInit(): void {
 
    //this.admins = this.route.snapshot.data['admins'];
    this.service.getAllParents().subscribe(
     data => { this.parents = data;}, //this success handler works only if status code between 200 and 299
     err => {console.log(err)}  //this success handler works only if status code between 4 and 5
     
    );
 }

 deleteParent(parentId: number) {
   let candelete = confirm(`Are you Sure to Delete parent record '${parentId}'`);
   if (candelete==true) {
     this.service.deleteParent(parentId).subscribe(data => {
       alert("Deleted Successfully");
       this.service.getAllParents().subscribe(pts => {
         this.parents = pts;
       });
     });
 }
 }

}
