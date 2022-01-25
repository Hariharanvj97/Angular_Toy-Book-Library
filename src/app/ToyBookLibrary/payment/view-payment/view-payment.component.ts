import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../../model/payment';

import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {
  paymentForm: FormGroup;
  payments:Payment [];
  isUpdate:boolean=false;

  constructor(private fb: FormBuilder, private service:PaymentService, private router:Router, private  route: ActivatedRoute, private route2: Router) {
    this.payments= new Array();
  }
 
    
  ngOnInit(): void {
 
    //show data into table after component is loaded
    this.service.getAllPayments().subscribe(
      data => { this.payments = data;}, //this success handler works only if status code between 200 and 299
      err => {console.log(err)}  //this success handler works only if status code between 4 and 5
 
      );
    }

      editPayment(pt: Payment): void {
        localStorage.removeItem("editpaymentId");
        localStorage.setItem("editpaymentId", pt.paymentId.toString());
        this.route2.navigate(['update-payment']);
      };

      deletePayment(paymentId: number) {
        let candelete = confirm(`Are you Sure to Delete Parent record '${paymentId}'`);
        if (candelete==true) {
          this.service.deletePayment(paymentId).subscribe(data => {
            alert("Deleted Successfully");
            this.service.getAllPayments().subscribe(pts => {
              this.payments = pts;
            });
          });
    

    
  }
      }
    }