import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DeleteItemsComponent } from "./delete-items/delete-items.component";
import { InsertItemsComponent } from "./insert-items/insert-items.component";
import { LenditemsService } from "./lenditems.service";
import { UpdateItemsComponent } from "./update-items/update-items.component";
import { ViewItemsComponent } from "./view-items/view-items.component";

@NgModule({
    declarations: [ InsertItemsComponent,
      UpdateItemsComponent,
      ViewItemsComponent,
      DeleteItemsComponent,
      ],

imports: [
  CommonModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  FormsModule  
],
exports: [ 
  ViewItemsComponent,
  UpdateItemsComponent,
  DeleteItemsComponent,
  InsertItemsComponent],
providers: 
[
//   , AddStudentCanDeactivateGuardService, StudentResolver, EditStudentCanActivateGuard, StudentCanActivateGuardService,
LenditemsService
]
})
export class LendItemsModule{ }