import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  adminForm: FormGroup;
  admins: Admin[];
  isUpdate:boolean=false;
  adminId: any;

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

  constructor(private fb: FormBuilder, private service:AdminService, private route:Router, private router:ActivatedRoute) {}

  ngOnInit(): void {
  
    this.adminForm = this.fb.group({
      adminId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      gender:['', Validators.required]   
    });

     this.service['getAdminById'](+localStorage.getItem("editadminId"))
      .subscribe( data => {
        this.adminForm.setValue(data);
      });
     
  }
  updateAdmin() {
   
    let admin:Admin = new Admin(
      this.adminForm.controls['adminId'].value, 
      this.adminForm.controls['username'].value, 
      this.adminForm.controls['password'].value, 
      this.adminForm.controls['mobile'].value,
      this.adminForm.controls['address'].value,
      this.adminForm.controls['email'].value,
      this.adminForm.controls['gender'].value);

    this.service.updateAdmin(admin)
      //.pipe(first())
      .subscribe(
        data => {
          confirm("Are you sure to make changes?");
              this.route.navigate(['/viewadmin']);
        });
  }

}