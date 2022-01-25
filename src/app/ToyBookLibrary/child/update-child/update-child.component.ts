import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Child } from '../../model/child';

import { ChildService } from '../child.service';



@Component({
  selector: 'app-update-child',
  templateUrl: './update-child.component.html',
   styleUrls: ['./update-child.component.css']
})
export class UpdateChildComponent implements OnInit {

     childForm: FormGroup;
     childs:Child [];
     isUpdate:boolean=false;
    childId:any;

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

  constructor(private fb: FormBuilder, private service: ChildService, private route:Router, private router:ActivatedRoute) { }

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

  this.service.getChildByID(+localStorage.getItem("editchildId"))
  .subscribe( data => {
   
    this.childForm.setValue(data);
  });
  }

  updateChild() {
    let cd:Child=this.childForm.value;

    this.service. updateChild(cd)
    //.pipe(first())
    .subscribe(
      data => { 
       confirm("Are you sure to make changes?");
        this.route.navigate(['/getAllChild']);
        
      },
      error => {
        alert(error);
      });
    }
  }