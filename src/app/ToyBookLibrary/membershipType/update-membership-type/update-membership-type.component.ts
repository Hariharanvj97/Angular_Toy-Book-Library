import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipType } from 'src/app/ToyBookLibrary/model/membership-type';
import { MembershipTypeService } from '../membership-type.service';

@Component({
  selector: 'app-update-membership-type',
  templateUrl: './update-membership-type.component.html',
  styleUrls: ['./update-membership-type.component.css']
})
export class UpdateMembershipTypeComponent implements OnInit {
  [x: string]: any;
  membershipTypeForm: FormGroup;
  member: MembershipType[];
  isUpdate:boolean=false;
  adminId: any;

  desclist: any = ['Toy Only', 'Book Only ', 'Toy And Book']
  
  form = new FormGroup({
    description: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }

  constructor(private fb: FormBuilder, private service:MembershipTypeService, private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.membershipTypeForm = this.fb.group({
      membershipTypeId:['', Validators.required],
      description:['', Validators.required],
      durationMonths: ['', Validators.required],
      price: ['', Validators.required]
 });
 this.service['getAllMembershipTypes']().subscribe(
  data => { this.member = data;}, //this success handler works only if status code between 200 and 299
  err => {console.log(err)}  //this success handler works only if status code between 4 and 5
 );  
}
 updateMmembershipType() {
   
  let member:MembershipType = new MembershipType(
    this.membershipTypeForm.controls['membershipTypeId'].value,
    this.membershipTypeForm.controls['description'].value,
    this.membershipTypeForm.controls['durationMonths'].value,
    this.membershipTypeForm.controls['price'].value
);

  this.service.updateMembershipType(member)
    //.pipe(first())
    .subscribe(
      data => {
        confirm("Are you sure to make changes?");
        this.route.navigate(['/viewmembershipType']);
      });
  
  }
}