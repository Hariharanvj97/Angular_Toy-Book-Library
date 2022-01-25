import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BookService } from "./book.service";
import { DeleteBookComponent } from "./delete-book/delete-book.component";
import { InsertBookComponent } from "./insert-book/insert-book.component";
import { UpdateBookComponent } from "./update-book/update-book.component";
import { ViewBookComponent } from "./view-book/view-book.component";

@NgModule({
    declarations: [ InsertBookComponent,
      ViewBookComponent,
      DeleteBookComponent,
     UpdateBookComponent],
 
imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FormsModule
  
  
],
exports: [ InsertBookComponent,
  ViewBookComponent,
  DeleteBookComponent,
 UpdateBookComponent],
providers:[BookService]
})
export class BookModule{ }