import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../../model/admin';


@Component({
  selector: 'app-insert-admin',
  templateUrl: './insert-admin.component.html',
  styleUrls: ['./insert-admin.component.css']
})


export class InsertAdminComponent implements OnInit {
  adminForm: FormGroup;
  isUpdate:boolean=false;
  admins: Admin[];
  emailValidator: any;

  gender: any = ['Female', 'Male', 'Other']
  
  form = new FormGroup({
    description: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  constructor(private fb: FormBuilder, private service:AdminService, private router:Router) {
    this.admins= new Array();
  }

  ngOnInit() {
    this.adminForm = this.fb.group({
      // adminId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      gender:['', Validators.required]
      // emailAddress: [null, [Validators.required, this.emailValidator]]
      
    });
        //show data into table after component is loaded
    this.service.getAllAdmins().subscribe(
      data => { this.admins = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5
      
     );
  } 
  
  insertAdmin(): void {
    let bk:Admin=this.adminForm.value;
        //logic for saving the book
        if(this.isUpdate==false){
          this.service.insertAdmin(bk).subscribe(data => {
            alert("Admin with Id " + data.adminId + " is created");
            this.service.getAllAdmins().subscribe(bks => {
              this.admins = bks;
            });
          },err => {console.log(err)});
        }
}

// emailValidator(control) {
//   if (control.value) {
//     const matches = control.value.match(/[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
//     return matches ? null : { 'invalidEmail': true };
//   } else {
//     return null;
//   }

// }


}

