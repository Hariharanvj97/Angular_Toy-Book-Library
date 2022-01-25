import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../model/login';
import { ParentService } from '../parent/parent.service';

@Component({
  selector: 'app-parentlogin',
  templateUrl: './parentlogin.component.html',
  styleUrls: ['./parentlogin.component.css']
})
export class ParentloginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router, private router2: ActivatedRoute, private service:ParentService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

parentLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  
  
    let login:Login = new Login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value); 

    this.service.childLogin(login).subscribe
    (data => {
      console.log("response received")
      this.router.navigate(['parenthome']);
    
    },
   error => {
      alert('Invalid username/password entered');
    })
}}
