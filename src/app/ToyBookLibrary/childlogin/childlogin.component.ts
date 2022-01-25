import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChildService } from '../child/child.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-childlogin',
  templateUrl: './childlogin.component.html',
  styleUrls: ['./childlogin.component.css']
})
export class ChildloginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router, private router2: ActivatedRoute, private service:ChildService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  childLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  
  
    let login:Login = new Login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value); 

    this.service.childLogin(login).subscribe
    (data => {
      console.log("response received")
      this.router.navigate(['childhome']);
  
    },
   error => {
      alert('Invalid username/password entered');
    })
}
}


