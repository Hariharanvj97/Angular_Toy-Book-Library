import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { Toy } from '../../model/toy'; 
import { ToyService } from '../toy.service';
// import { Address } from '../model/address';



@Component({
  selector: 'app-insert-toy',
  templateUrl: './insert-toy.component.html',
  styleUrls: ['./insert-toy.component.css']
})
export class InsertToyComponent implements OnInit {
  public toyForm: FormGroup;
  isUpdate:boolean=false;
  toys:Toy [];

  constructor(private fb: FormBuilder, private service:ToyService) { 

  }

  ngOnInit() {
    this.toyForm = this.fb.group({
      toyId: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      company: ['', Validators.required],
      price: ['', Validators.required],
      availabletoys: ['',Validators.required]

  });
}

insertToy(): void {
    // let address:Address = new Address(this.studentForm.controls.city.value, 
    //   this.studentForm.controls.state.value, this.studentForm.controls.pin.value);
    let bk:Toy=this.toyForm.value;
    // logic for saving the book
      if(this.isUpdate==false){
          this.service.insertToy(bk)
           .subscribe(data => {
            alert("Toy with Id " + data.toyId + " is created");
            this.service.getAllToy().subscribe(bks => {
              this.toys = bks;
            });
          },err => {console.log(err)});
      }
    
  }
}
