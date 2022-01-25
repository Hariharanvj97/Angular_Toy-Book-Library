import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent implements OnInit {
  admins: Admin[];
  constructor(private fb: FormBuilder, private service:AdminService, private router:Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.admins = this.route.snapshot.data['admins'];
    this.service.getAllAdmins().subscribe(
      data => { this.admins = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5
      
     );
  }

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

  // deleteAdmin(admin: Admin): void {
  //   let result = confirm('Do you want to delete the admin record?')
  //   if (result) {
  //     this.service.deleteAdmin(admin.adminId)
  //       .subscribe(data => {
  //         this.admins = this.admins.filter(s => s !== admin)
  //       });
  //   }
  // };

// deleteStudent(student: Student): void {
//   let result = confirm('Do you want to delete the student?')
//   if (result) {
//     this.service.deleteStudent(student.studentId)
//       .subscribe(data => {
//         this.students = this.students.filter(s => s !== student);
//       });
//   }
// };

// function deleteAdmin(admin: any, Admin: typeof Admin) {
//   throw new Error('Function not implemented.');
// }
