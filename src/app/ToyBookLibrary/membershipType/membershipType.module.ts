import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents} from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { MembershipType } from '../model/membership-type';
import { AdminService } from '../admin/admin.service';
import { MembershipTypeService } from './membership-type.service';
import { CommonModule } from '@angular/common';
import { AdminModule } from '../admin/admin.module';
import { InsertMembershipTypeComponent } from './insert-membership-type/insert-membership-type.component';
import { ViewMembershipTypeComponent } from './view-membership-type/view-membership-type.component';
import { DeleteMembershipTypeComponent } from './delete-membership-type/delete-membership-type.component';
import { UpdateMembershipTypeComponent } from './update-membership-type/update-membership-type.component';


@NgModule({
  declarations: [InsertMembershipTypeComponent, ViewMembershipTypeComponent, DeleteMembershipTypeComponent, UpdateMembershipTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ InsertMembershipTypeComponent, ViewMembershipTypeComponent, DeleteMembershipTypeComponent, UpdateMembershipTypeComponent],
  providers: [MembershipTypeService]
  //bootstrap: [AppComponent]
})
export class MembershipTypeModule { }



