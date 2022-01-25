import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment'; 

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
    
  constructor(private http:HttpClient) {}

  private baseUrl="http://localhost:8080/ToyBookLibraryApp"


  addPayment(pt):Observable<Payment> {
 
    return this.http.post<Payment>("http://localhost:8080/ToyBookLibraryApp/payment/insertpayment", pt); //string template
    }

    getAllPayments():Observable<Payment[]> {
   
      return this.http.get<Payment[]>("http://localhost:8080/ToyBookLibraryApp/payment/viewpayment");
      
    }

    deletePayment(PaymentId:number):Observable<Payment>{
      return this.http.delete<Payment>(` http://localhost:8080/ToyBookLibraryApp/payment/deletepayment/${PaymentId}`);
    
    }
    updatePayment(pt:Payment):Observable<Payment>{​​​​​​​​​
      console.log(JSON.stringify (pt))
      return this.http.put<Payment>(`http://localhost:8080/ToyBookLibraryApp/payment/updatepayment`,pt);
          }​​​​​​​​​

          getAllBypaymentId(paymentId:any):Observable<Payment>{
            return this.http.get<Payment>(` http://localhost:8080/ToyBookLibraryApp/payment/viewpaymentById/${paymentId}`);
          
          }

   }


