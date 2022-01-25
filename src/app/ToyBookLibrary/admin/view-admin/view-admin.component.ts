import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  adminForm: FormGroup;
  isUpdate:boolean=false;
  admins: Admin[];

  constructor(private fb: FormBuilder, private service:AdminService, private router:Router,  private route2: Router) {
    this.admins= new Array();
  }

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
         //show data into table after component is loaded
         this.service.getAllAdmins().subscribe(
          data => { this.admins = data;}, //this success handler works only if status code between 200 and 299
          err => {console.log(err)}  //this success handler works only if status code between 4 and 5
          
         );
  }

         editAdmin(bk: Admin): void {
          localStorage.removeItem("editadminId");
          localStorage.setItem("editbookId", bk.adminId.toString());
          this.route2.navigate(['updateadmin']);
        };

        
  deleteAdmin(adminId: number) {
    let candelete = confirm(`Are you Sure to Delete Admin record '${adminId}'`);
    if (candelete==true) {
      this.service.deleteAdmin(adminId).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllAdmins().subscribe(bks => {
          this.admins = bks;
        });
      });
    }
  }
  }