import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeleteParentComponent } from "./delete-parent/delete-parent.component";
import { InsertParentComponent } from "./insert-parent/insert-parent.component";

import { ParentService } from "./parent.service";
import { UpdateParentComponent } from "./update-parent/update-parent.component";
import { ViewParentComponent } from "./view-parent/view-parent.component";

@NgModule({
    declarations: [InsertParentComponent,
  ViewParentComponent,
  DeleteParentComponent,
  UpdateParentComponent
    ],
imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FormsModule
  
  
],
exports: [   InsertParentComponent,
  ViewParentComponent,
  DeleteParentComponent,
  UpdateParentComponent
],
providers: 
[ParentService]
})
export class ParentModule{ }
