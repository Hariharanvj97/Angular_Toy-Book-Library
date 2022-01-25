import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MembershipType } from 'src/app/ToyBookLibrary/model/membership-type';
import { MembershipTypeService } from '../membership-type.service';

@Component({
  selector: 'app-insert-membership-type',
  templateUrl: './insert-membership-type.component.html',
  styleUrls: ['./insert-membership-type.component.css']
})
export class InsertMembershipTypeComponent implements OnInit {
  membershipTypeForm: FormGroup;
  isUpdate:boolean=false;
  member: MembershipType[];

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


  constructor(private fb: FormBuilder, private service:MembershipTypeService, private router:Router) {
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

  insertMembershipType(): void {
        let bk:MembershipType=this.membershipTypeForm.value;
            //logic for saving the book
            if(this.isUpdate==false){
              this.service.insertMembershipType(bk).subscribe(data => {
                alert("Membership Type with Id " + data.membershipTypeId + " is created");
                this.service.getAllMembershipTypes().subscribe(bks => {
                  this.member = bks;
                });
              },err => {console.log(err)});
            }
          }
}

