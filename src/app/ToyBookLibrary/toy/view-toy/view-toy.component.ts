import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toy } from '../../model/toy';
import { ToyService } from '../toy.service';

@Component({
  selector: 'app-view-toy',
  templateUrl: './view-toy.component.html',
  styleUrls: ['./view-toy.component.css']
})
export class ViewToyComponent implements OnInit {
  public toyForm: FormGroup;
  isUpdate:boolean=false;
  toys:Toy [];
  constructor(private fb: FormBuilder, private service:ToyService,private router:Router, private  route: ActivatedRoute, private route2: Router) { 
    this.toys= new Array();
  }
  ngOnInit(): void {
    this.toyForm = this.fb.group({
      toyId: ['', Validators.required],
     name: ['', Validators.required],
      category: ['', Validators.required],
      company: ['', Validators.required],
      price: ['', Validators.required],
      availabletoys: ['', Validators.required]
    });
      //show data into table after component is loaded
      this.service.getAllToy().subscribe(
        data => { this.toys = data;}, 
        err => {console.log(err)}  
  );
      }
      editToy(bk: Toy): void {
        localStorage.removeItem("edittoyId");
        localStorage.setItem("edittoyId", bk.toyId.toString());
        this.route2.navigate(['update-toy']);
      };
      deleteToy(toyId: number) {
        let candelete = confirm(`Are you Sure to Delete Book record '${toyId}'`);
        if (candelete==true) {
          this.service.deleteToy(toyId).subscribe(data => {
            alert("Deleted Scuccessfully");
            this.service.getAllToy().subscribe(bks => {
              this.toys = bks;
            });
          });
      }
      
    
    }
    }



