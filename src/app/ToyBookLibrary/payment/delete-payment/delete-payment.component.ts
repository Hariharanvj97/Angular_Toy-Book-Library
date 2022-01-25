import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Payment } from '../../model/payment'; 
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-delete-payment',
  templateUrl: './delete-payment.component.html',
  styleUrls: ['./delete-payment.component.css']
})
export class DeletePaymentComponent implements OnInit {
  parentForm: FormGroup;
  isUpdate:boolean=false;
  payments:Payment [];

  constructor(private fb: FormBuilder, private service: PaymentService) {
    this.payments= new Array();
  }

  ngOnInit(): void {
 
    //this.admins = this.route.snapshot.data['admins'];
    this.service.getAllPayments().subscribe(
     data => { this.payments = data;}, //this success handler works only if status code between 200 and 299
     err => {console.log(err)}  //this success handler works only if status code between 4 and 5
     
    );
 }

 deletePayment(paymentId: number) {
   let candelete = confirm(`Are you Sure to Delete parent record '${paymentId}'`);
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
