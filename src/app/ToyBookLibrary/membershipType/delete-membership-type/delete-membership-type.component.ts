import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipType } from 'src/app/ToyBookLibrary/model/membership-type';
import { MembershipTypeService } from '../membership-type.service';

@Component({
  selector: 'app-delete-membership-type',
  templateUrl: './delete-membership-type.component.html',
  styleUrls: ['./delete-membership-type.component.css']
})
export class DeleteMembershipTypeComponent implements OnInit {
  member: MembershipType[];
  constructor(private fb: FormBuilder, private service:MembershipTypeService, private router:Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.admins = this.route.snapshot.data['admins'];
    this.service.getAllMembershipTypes().subscribe(
      data => { this.member = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5
      
     );
  }
  deleteMembershipType(membershipTypeId: number) {
    let candelete = confirm(`Are you Sure to Delete Membershipt Type '${membershipTypeId}'`);
    if (candelete==true) {
      this.service['deleteMembershipType'](membershipTypeId).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllMembershipTypes().subscribe(bks => {
          this.member = bks;
        });
      });
    }

  }
}
