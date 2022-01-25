import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/ToyBookLibrary/model/login';
import { AdminService } from '../admin/admin.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private router2: ActivatedRoute, private service:AdminService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  adminLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  
    let login:Login = new Login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value); 

    this.service.adminLogin(login).subscribe
    (data => {
      console.log("response received")
      this.router.navigate(['adminhome']);
  
    },
    
   error => {
      alert('Invalid username/password entered');
    })
  }

  
}
