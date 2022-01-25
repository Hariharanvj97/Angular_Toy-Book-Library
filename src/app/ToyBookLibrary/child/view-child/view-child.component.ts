import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Child } from '../../model/child';
import { ChildService } from '../child.service';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  childForm: FormGroup;
  isUpdate:boolean=false;
  childs:Child [];
 

  constructor(private fb: FormBuilder, private service: ChildService,private router:Router, private  route: ActivatedRoute, private route2: Router) { 
    this.childs= new Array();

  }

  ngOnInit(): void {
    this.childForm = this.fb.group({
      childId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
    });

this.service.getAllChild().subscribe(
  data => { this.childs = data;}, //this success handler works only if status code between 200 and 299
  err => {console.log(err)}  //this success handler works only if status code between 4 and 5

  );
}
editChild(cd: Child): void {
  localStorage.removeItem("editChildId");
  localStorage.setItem("editChildId", cd.childId.toString());
  this.route2.navigate(['update-child']);
};
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