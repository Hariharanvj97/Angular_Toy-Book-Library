import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Parent } from '../../model/parent';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-insert-parent',
  templateUrl: './insert-parent.component.html',
  styleUrls: ['./insert-parent.component.css']
})
export class InsertParentComponent implements OnInit {
  parentForm: FormGroup;
  parents:Parent [];
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

  constructor(private fb: FormBuilder, private service: ParentService) {
    this.parents= new Array();
   }

  ngOnInit(): void {
    
    console.log("ng on init");
   
    this.parentForm = this.fb.group({
      
      address:['',Validators.required],
      email: ['',[ Validators.required,Validators.email]],
        gender:['',Validators.required],
        mobile:['',Validators.required],
        password:['',Validators.required],
        username:['',Validators.required],
        cardNo:['',Validators.required],
         upiNo:['',Validators.required]
   
      });

      //   //show data into table after component is loaded
    this.service.getAllParents()
  .subscribe(
      data => { this.parents = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5
      
      );
  }


  saveParent(): void{
    let pt:Parent=this.parentForm.value;
    //logic for saving the book
    if(this.isUpdate==false){
      this.service.addParent(pt)
      .subscribe(data => {
        alert("Parent with Id " + data.parentId + " is created");
        this.service.getAllParents().subscribe(pts => {
          this.parents = pts;
        });
      },err => {console.log(err)});
    }
  //updating the book
  else{
      
    this.service.updateParent(pt).subscribe(data => {
      alert("Parent info  is Updated");
      this.service.getAllParents().subscribe(pts => {
        this.parents = pts;
           });
    });
    this.isUpdate=false;
  }
  this.parentForm.reset();
  
  }


}
