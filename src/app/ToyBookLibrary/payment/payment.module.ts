import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaymentService } from "./payment.service";
import { DeletePaymentComponent } from "./delete-payment/delete-payment.component";
import { InsertPaymentComponent } from "./insert-payment/insert-payment.component";
import { UpdatePaymentComponent } from "./update-payment/update-payment.component";
import { ViewPaymentComponent } from "./view-payment/view-payment.component";

@NgModule({
    declarations: [
      InsertPaymentComponent,
      ViewPaymentComponent,
      DeletePaymentComponent,
      UpdatePaymentComponent
    ],
imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FormsModule
  
  
],
exports: [
  InsertPaymentComponent,
  ViewPaymentComponent,
  DeletePaymentComponent,
  UpdatePaymentComponent
],
providers: 
[PaymentService]
})
export class PaymentModule{ }
