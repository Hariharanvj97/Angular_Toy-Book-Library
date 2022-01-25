import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './ToyBookLibrary/admin/admin.module';
import { MembershipType } from './ToyBookLibrary/model/membership-type';
import { MembershipTypeModule } from './ToyBookLibrary/membershipType/membershipType.module';
import { LoginComponent } from './ToyBookLibrary/adminlogin/login.component';
import { ChildModule } from './ToyBookLibrary/child/child.module';
import { BookModule } from './ToyBookLibrary/book/book.module';
import { ParentModule } from './ToyBookLibrary/parent/parent.module';
import { ToyModule } from './ToyBookLibrary/toy/toy.module';
import { PaymentModule } from './ToyBookLibrary/payment/payment.module';
import { LendItemsModule } from './ToyBookLibrary/lenditems/lenditems.module';
import { ChildloginComponent } from './ToyBookLibrary/childlogin/childlogin.component';
import { ParentloginComponent } from './ToyBookLibrary/parentlogin/parentlogin.component';
import { AdminhomeComponent } from './ToyBookLibrary/adminhome/adminhome.component';
import { ChildhomeComponent } from './ToyBookLibrary/childhome/childhome.component';
import { ParenthomeComponent } from './ToyBookLibrary/parenthome/parenthome.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildloginComponent,
    ParentloginComponent,
    AdminhomeComponent,
    ChildhomeComponent,
    ParenthomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    MembershipTypeModule,
    ChildModule,
    BookModule,
    ParentModule,
    ToyModule,
    LendItemsModule,
    PaymentModule,
    
    //LoginComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
