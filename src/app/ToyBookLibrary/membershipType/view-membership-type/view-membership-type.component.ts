import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MembershipType } from 'src/app/ToyBookLibrary/model/membership-type';
import { MembershipTypeService } from '../membership-type.service';


@Component({
  selector: 'app-view-membership-type',
  templateUrl: './view-membership-type.component.html',
  styleUrls: ['./view-membership-type.component.css']
})
export class ViewMembershipTypeComponent implements OnInit {
  membershipTypeForm: FormGroup;
  isUpdate:boolean=false;
  member: MembershipType[];

  constructor(private fb: FormBuilder, private service:MembershipTypeService, private router:Router,  private route2: Router) {
    this.member= new Array();
   }

  ngOnInit(): void {
    this.membershipTypeForm = this.fb.group({
      membershipTypeId:['', Validators.required],
      description:['', Validators.required],
      durationMonths: ['', Validators.required],
      price: ['', Validators.required]
 });

      // show data into table after component is loaded
      // show data into table after component is loaded
      this.service['getAllMembershipTypes']().subscribe(
      data => { this.member = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5
      
     );

}
editMembershipType(bk: MembershipType): void {
  localStorage.removeItem("editmembershipTypeId");
  localStorage.setItem("membershipTypeId", bk.membershipTypeId.toString());
  this.route2.navigate(['updatemembership']);
};

}