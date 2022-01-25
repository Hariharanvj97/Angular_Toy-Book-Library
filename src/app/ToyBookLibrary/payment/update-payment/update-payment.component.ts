import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../../model/payment';

import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {
  paymentForm: FormGroup;
  payments: Payment[];
  isUpdate:boolean=false;
  paymentId: any;
  

  constructor(private fb: FormBuilder, private service: PaymentService, private route:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("ng on init");
     
    this.paymentForm = this.fb.group({  
      paymentId:['',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required]
    });
  

  this.service. getAllBypaymentId(+localStorage.getItem("editpaymentId"))
  .subscribe( data => {
    this.paymentForm.setValue(data);
  });
  }

  updatePayment() {
    let pt:Payment=this.paymentForm.value

    this.service. updatePayment(pt)
    //.pipe(first())
    .subscribe(
      data => { 
       confirm("Are you sure to make changes?");
        this.route.navigate(['/viewgetAllPayments']);
        
      },
      error => {
        alert(error);
      });
    }
}