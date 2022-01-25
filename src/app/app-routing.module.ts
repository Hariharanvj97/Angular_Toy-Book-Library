import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteAdminComponent } from './ToyBookLibrary/admin/delete-admin/delete-admin.component';
import { InsertAdminComponent } from './ToyBookLibrary/admin/insert-admin/insert-admin.component';
import { UpdateAdminComponent } from './ToyBookLibrary/admin/update-admin/update-admin.component';
import { ViewAdminComponent } from './ToyBookLibrary/admin/view-admin/view-admin.component';
import { DeleteBookComponent } from './ToyBookLibrary/book/delete-book/delete-book.component';
import { InsertBookComponent } from './ToyBookLibrary/book/insert-book/insert-book.component';
import { UpdateBookComponent } from './ToyBookLibrary/book/update-book/update-book.component';
import { ViewBookComponent } from './ToyBookLibrary/book/view-book/view-book.component';
import { DeleteChildComponent } from './ToyBookLibrary/child/delete-child/delete-child.component';
import { InsertChildComponent } from './ToyBookLibrary/child/insert-child/insert-child.component';
import { UpdateChildComponent } from './ToyBookLibrary/child/update-child/update-child.component';
import { ViewChildComponent } from './ToyBookLibrary/child/view-child/view-child.component';
import { DeleteItemsComponent } from './ToyBookLibrary/lenditems/delete-items/delete-items.component';
import { InsertItemsComponent } from './ToyBookLibrary/lenditems/insert-items/insert-items.component';
import { UpdateItemsComponent } from './ToyBookLibrary/lenditems/update-items/update-items.component';
import { ViewItemsComponent } from './ToyBookLibrary/lenditems/view-items/view-items.component';
import { LoginComponent } from './ToyBookLibrary/adminlogin/login.component';
import { DeleteMembershipTypeComponent } from './ToyBookLibrary/membershipType/delete-membership-type/delete-membership-type.component';
import { InsertMembershipTypeComponent } from './ToyBookLibrary/membershipType/insert-membership-type/insert-membership-type.component';
import { UpdateMembershipTypeComponent } from './ToyBookLibrary/membershipType/update-membership-type/update-membership-type.component';
import { ViewMembershipTypeComponent } from './ToyBookLibrary/membershipType/view-membership-type/view-membership-type.component';
import { DeleteParentComponent } from './ToyBookLibrary/parent/delete-parent/delete-parent.component';
import { InsertParentComponent } from './ToyBookLibrary/parent/insert-parent/insert-parent.component';
import { UpdateParentComponent } from './ToyBookLibrary/parent/update-parent/update-parent.component';
import { ViewParentComponent } from './ToyBookLibrary/parent/view-parent/view-parent.component';
import { DeletePaymentComponent } from './ToyBookLibrary/payment/delete-payment/delete-payment.component';
import { InsertPaymentComponent } from './ToyBookLibrary/payment/insert-payment/insert-payment.component';
import { UpdatePaymentComponent } from './ToyBookLibrary/payment/update-payment/update-payment.component';
import { ViewPaymentComponent } from './ToyBookLibrary/payment/view-payment/view-payment.component';
import { DeleteToyComponent } from './ToyBookLibrary/toy/delete-toy/delete-toy.component';
import { InsertToyComponent } from './ToyBookLibrary/toy/insert-toy/insert-toy.component';
import { UpdateToyComponent } from './ToyBookLibrary/toy/update-toy/update-toy.component';
import { ViewToyComponent } from './ToyBookLibrary/toy/view-toy/view-toy.component';
import { ChildloginComponent } from './ToyBookLibrary/childlogin/childlogin.component';
import { ParentloginComponent } from './ToyBookLibrary/parentlogin/parentlogin.component';
import { AdminhomeComponent } from './ToyBookLibrary/adminhome/adminhome.component';
import { ChildhomeComponent } from './ToyBookLibrary/childhome/childhome.component';
import { ParenthomeComponent } from './ToyBookLibrary/parenthome/parenthome.component';

const routes: Routes = [
{path: 'validatePassword', component:LoginComponent},
{path: 'childlogin', component:ChildloginComponent},
{path: 'parentlogin', component:ParentloginComponent},
{path: 'adminhome', component:AdminhomeComponent},
{path: 'childhome', component:ChildhomeComponent},
{path: 'parenthome', component:ParenthomeComponent},
{path:'viewadmin',component:ViewAdminComponent},
{path:'insertadmin',component:InsertAdminComponent},
{path:'updateadmin',component:UpdateAdminComponent},
{path:'deleteadmin',component:DeleteAdminComponent},
{path:'insertmembershipType',component:InsertMembershipTypeComponent},
{path:'viewmembershipType',component:ViewMembershipTypeComponent},
{path:'deletemembership',component:DeleteMembershipTypeComponent},
{path:'updatemembership',component:UpdateMembershipTypeComponent},
{path:'insertchild',component:InsertChildComponent},
{path:'viewchild',component:ViewChildComponent},
{path:'deletechild',component:DeleteChildComponent},
{path:'update-child',component:UpdateChildComponent},
{path:'insertbook',component:InsertBookComponent},
{path:'viewbook',component:ViewBookComponent},
{path:'deletebook',component:DeleteBookComponent},
{path:'update-book',component:UpdateBookComponent},
{path:'insertparent',component:InsertParentComponent},
{path:'viewparent',component:ViewParentComponent},
{path:'deleteparent',component:DeleteParentComponent},
{path:'update-parent',component:UpdateParentComponent},
{path:'insertoy',component:InsertToyComponent},
{path:'viewtoy',component:ViewToyComponent},
{path:'deletetoy',component:DeleteToyComponent},
{path:'update-toy',component:UpdateToyComponent},
{path:'insertLend',component:InsertItemsComponent},
{path:'lendlist',component:ViewItemsComponent},
{path:'lenddel',component:DeleteItemsComponent},
{path:'lendput',component:UpdateItemsComponent},
{path:'insertpayment',component:InsertPaymentComponent},
{path:'viewpayment',component:ViewPaymentComponent},
{path:'deletepayment',component:DeletePaymentComponent},
{path:'update-payment',component:UpdatePaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 export const routingComponents=[
  LoginComponent,
  AdminhomeComponent,
  ChildloginComponent,
  ChildhomeComponent,
  ParentloginComponent,
  ParenthomeComponent,
  ViewAdminComponent,
  InsertAdminComponent,
  UpdateAdminComponent,
  DeleteAdminComponent,
  InsertMembershipTypeComponent,
  ViewMembershipTypeComponent,
  UpdateMembershipTypeComponent,
  DeleteMembershipTypeComponent,
  InsertChildComponent,
  ViewChildComponent,
  DeleteChildComponent,
  UpdateChildComponent,
  InsertBookComponent,
  ViewBookComponent,
  DeleteBookComponent,
  UpdateBookComponent,
  InsertParentComponent,
  ViewParentComponent,
  DeleteParentComponent,
  UpdateParentComponent,
  InsertToyComponent,
  ViewToyComponent,
  DeleteToyComponent,
  UpdateToyComponent,
  InsertItemsComponent,
  UpdateItemsComponent,
  DeleteItemsComponent,
  InsertItemsComponent,
  InsertPaymentComponent,
  ViewPaymentComponent,
  DeletePaymentComponent,
  UpdatePaymentComponent
]

