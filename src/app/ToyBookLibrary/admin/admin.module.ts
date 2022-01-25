import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule, routingComponents } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { Admin } from '../model/admin';
import { AdminService } from './admin.service';
import { MembershipTypeService } from '../membershipType/membership-type.service';
import { CommonModule } from '@angular/common';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { InsertAdminComponent } from './insert-admin/insert-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { routingComponents } from 'src/app/app-routing.module';
import { LoginComponent } from '../adminlogin/login.component';


@NgModule({
  declarations: [InsertAdminComponent, ViewAdminComponent, DeleteAdminComponent, UpdateAdminComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [InsertAdminComponent, ViewAdminComponent, DeleteAdminComponent, UpdateAdminComponent, LoginComponent],
  providers: [AdminService]
  //bootstrap: [AppComponent]
})
export class AdminModule { }



