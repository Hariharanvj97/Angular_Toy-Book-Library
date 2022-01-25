import { Component } from '@angular/core';
import { AdminService } from './ToyBookLibrary/admin/admin.service';
import { MembershipTypeService } from './ToyBookLibrary/membershipType/membership-type.service';
import { NavigationCancel, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: [AdminService, MembershipTypeService]
})
export class AppComponent {
  // title = 'ToyBookLibraryApp';
  // admins!: any[];
  //   constructor(private _adminService: AdminService) {}
  //     ngOnInit() {
  //   }

  showLoadingIndicator = true;

  constructor(private router:Router){
    this.router.events.subscribe((routerEvent:RouterEvent) =>{
      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;
      }
      if(routerEvent instanceof NavigationCancel){
        this.showLoadingIndicator = false;
      }
      
      if(routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator = false;
      }
    })
  }
}
