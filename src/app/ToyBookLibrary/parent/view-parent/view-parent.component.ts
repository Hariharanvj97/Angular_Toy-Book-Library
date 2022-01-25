import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from '../../model/parent';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit {
  parentForm: FormGroup;
  isUpdate:boolean=false;
  parents: Parent[];

  constructor(private fb: FormBuilder, private service:ParentService, private router:Router, private  route: ActivatedRoute, private route2: Router) {
    this.parents= new Array();
  }
  
  ngOnInit(): void {

    
    this.parentForm = this.fb.group({
      parentId:['',Validators.required],
      address:['',Validators.required],
      email: ['',[ Validators.required,Validators.email]],
        gender:['',Validators.required],
        mobile:['',Validators.required],
        password:['',Validators.required],
        username:['',Validators.required],
        cardNo:['',Validators.required],
         upiNo:['',Validators.required]
      
       
        
       
   
      });
 
    //show data into table after component is loaded
    this.service.getAllParents().subscribe(
      data => { this.parents = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5
 
      );
    }

    editParent(pt: Parent): void {
      localStorage.removeItem("editparentId");
      localStorage.setItem("editparentId", pt.parentId.toString());
      this.route2.navigate(['update-parent']);
    };
    deleteParent(parentId: number) {
      let candelete = confirm(`Are you Sure to Delete Parent record '${parentId}'`);
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