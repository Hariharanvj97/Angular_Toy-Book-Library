import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Child } from '../../model/child'; 
import { ChildService } from '../child.service';

@Component({
  selector: 'app-insert-child',
  templateUrl: './insert-child.component.html',
  styleUrls: ['./insert-child.component.css']
})
export class InsertChildComponent implements OnInit {
  childForm: FormGroup;
  childs:Child [];
  isUpdate:boolean=false;

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

  constructor(private fb: FormBuilder, private service: ChildService) { 
    this.childs= new Array();

  }
 

  ngOnInit(): void {
    console.log("ng on init");
    this.childForm = this.fb.group({
     
      address: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      parentId: ['', Validators.required]
    });
  }

    insertchild(): void {
      let cd:Child=this.childForm.value;
      //logic for saving child
      if(this.isUpdate==false){
        this.service.addChild(cd)
        .subscribe(data => {
          alert("Child with Id " + data.childId + " is created");
          this.service.getAllChild().subscribe(chd => {
            this.childs = chd;
          });
        },err => {console.log(err)});
      }
  
      //updating the book
      else{
        
        this.service.updateChild(cd).subscribe(data => {
          alert("Child  details Updated");
          this.service.getAllChild().subscribe(chd => {
            this.childs = chd;
               });
        });
        this.isUpdate=false;
      }
      this.childForm.reset();






  }

}
