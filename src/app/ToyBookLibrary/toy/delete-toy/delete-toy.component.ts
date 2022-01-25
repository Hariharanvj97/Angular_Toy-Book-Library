import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toy } from '../../model/toy';
import { ToyService } from '../toy.service';
// import { Admin } from '../admin.module';

@Component({
  selector: 'app-delete-toy',
  templateUrl: './delete-toy.component.html',
  styleUrls: ['./delete-toy.component.css']
})
export class DeleteToyComponent implements OnInit {
  toys:Toy [];
  constructor(private fb: FormBuilder, private service:ToyService,private router:Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAllToy().subscribe(
      data => { this.toys = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5

      );
    }

    deleteToy(toyId: number) {
      let candelete = confirm(`Are you Sure to Delete Toy record '${toyId}'`);
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
  

    
  
