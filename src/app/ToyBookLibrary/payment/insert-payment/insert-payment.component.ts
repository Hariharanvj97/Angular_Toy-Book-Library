import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from '../../model/payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-insert-payment',
  templateUrl: './insert-payment.component.html',
  styleUrls: ['./insert-payment.component.css']
})
export class InsertPaymentComponent implements OnInit {
  paymentForm: FormGroup;
  payments:Payment [];
  isUpdate:boolean=false;

  constructor(private fb: FormBuilder, private service: PaymentService) {
    this.payments= new Array();
  }
    ngOnInit(): void {
    
      console.log("ng on init");
     
      this.paymentForm = this.fb.group({
        
        paymentId:['',Validators.required],
        startDate:['',Validators.required],
        endDate:['',Validators.required]
      });
        this.service.getAllPayments()
        .subscribe(
            data => { this.payments = data;}, //this success handler works only if status code between 200 and 299
            err => {console.log(err)}  //this success handler works only if status code between 4 and 5
            
            );
        }
        savePayment(): void{
              let pt:Payment=this.paymentForm.value;
              //logic for saving the book
              if(this.isUpdate==false){
                this.service.addPayment(pt)
                .subscribe(data => {
                  alert("Payment with Id " + data.paymentId + " is created");
                  this.service.getAllPayments().subscribe(pts => {
                    this.payments = pts;
                  });
                },err => {console.log(err)});
              }
            //updating the book
            else{
                
              this.service.updatePayment(pt).subscribe(data => {
                alert("Payment info  is Updated");
                this.service.getAllPayments().subscribe(pts => {
                  this.payments = pts;
                     });
              });
              this.isUpdate=false;
            }
            this.paymentForm.reset();
            
            }
        
}    

