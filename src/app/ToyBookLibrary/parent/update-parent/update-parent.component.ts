import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from '../../model/parent';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-update-parent',
  templateUrl: './update-parent.component.html',
  styleUrls: ['./update-parent.component.css']
})
export class UpdateParentComponent implements OnInit {
   
  parentForm: FormGroup;
  parents: Parent[];
  isUpdate:boolean=false;
  parentId: any;
  
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

  constructor(private fb: FormBuilder, private service: ParentService, private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.parentForm = this.fb.group({

      parentId:['',Validators.required], 
      username:['',Validators.required],
      password:['',Validators.required],
      gender:['',Validators.required],
      mobile:['',Validators.required],
      email: ['',[ Validators.required,Validators.email]],
      address:['',Validators.required],
        cardNo:['',Validators.required],
         upiNo:['',Validators.required],
      });

  this.service.getParentById(+localStorage.getItem("editparentId"))
  .subscribe( data => {
   
    this.parentForm.setValue(data);
  });
  }

  updateParent() {
    let pt:Parent=this.parentForm.value

    this.service. updateParent(pt)
    //.pipe(first())
    .subscribe(
      data => { 
       confirm("Are you sure to make changes?");
        this.route.navigate(['/view']);
        
      },
      error => {
        alert(error);
      });
    }




      



  }