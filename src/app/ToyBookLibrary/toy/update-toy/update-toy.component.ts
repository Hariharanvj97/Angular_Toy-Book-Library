import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toy } from '../../model/toy';
import { ToyService } from '../toy.service';
@Component({
  selector: 'app-update-toy',
  templateUrl: './update-toy.component.html',
  styleUrls: ['./update-toy.component.css']
})
export class UpdateToyComponent implements OnInit {
  
  public toyForm: FormGroup;
  isUpdate:boolean=false;
  toys:Toy [];
  toyId: any;

  constructor(private fb: FormBuilder, private service:ToyService, private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.toyForm = this.fb.group({
      toyId: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      company: ['', Validators.required],
      price: ['', Validators.required],
      availabletoys: ['',Validators.required]

  });
  this.service.getToyById(+localStorage.getItem("edittoyId"))
       .subscribe( data => {
         this.toyForm.setValue(data);
        });

      }
 
      updateToy() {
        let bk:Toy = new Toy(
          this.toyForm.controls['toyId'].value,
       
          this.toyForm.controls['name'].value,
        
          this.toyForm.controls['category'].value,
        
          this.toyForm.controls['company'].value,
        
          this.toyForm.controls['price'].value,
        
          this.toyForm.controls['availabletoys'].value
          );
        
        
        this.service.updateToy(bk)
          //.pipe(first())
          .subscribe(
            data => { 
             confirm("Are you sure to make changes?");
              this.route.navigate(['/getAllToy']);
              
            });
      }
    }