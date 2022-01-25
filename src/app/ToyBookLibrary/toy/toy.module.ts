import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToyService } from "./toy.service";
import { DeleteToyComponent } from "./delete-toy/delete-toy.component";
import { InsertToyComponent } from "./insert-toy/insert-toy.component";
import { UpdateToyComponent } from "./update-toy/update-toy.component";
import { ViewToyComponent } from "./view-toy/view-toy.component";


@NgModule({
    declarations: [ InsertToyComponent,
      ViewToyComponent,
      DeleteToyComponent,
      UpdateToyComponent],
 
imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  
  
],
exports: [  InsertToyComponent,
  ViewToyComponent,
  DeleteToyComponent,
  UpdateToyComponent,],
providers: 
[
//   , AddStudentCanDeactivateGuardService, StudentResolver, EditStudentCanActivateGuard, StudentCanActivateGuardService,
ToyService,
]
})
export class ToyModule{ }