import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';





import { ChildService } from './child.service';
import { CommonModule } from '@angular/common';
import { InsertChildComponent } from './insert-child/insert-child.component';
import { UpdateChildComponent } from './update-child/update-child.component';
import { DeleteChildComponent } from './delete-child/delete-child.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
   InsertChildComponent,
   UpdateChildComponent,
   DeleteChildComponent,
   ViewChildComponent
  ],
  imports: [
  
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
   InsertChildComponent,
    UpdateChildComponent,
    DeleteChildComponent,
    ViewChildComponent],
  providers: [ChildService],
  
})
export class ChildModule { }
