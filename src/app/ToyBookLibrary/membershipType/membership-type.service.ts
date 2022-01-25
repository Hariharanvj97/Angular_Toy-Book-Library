import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MembershipType } from '../model/membership-type';


@Injectable({
  providedIn: 'root'
})
export class MembershipTypeService {

  [x: string]: any;

  constructor(private http:HttpClient) { }
  private baseUrl="http://localhost:8080/ToyBookLibraryApp"
 // creating Book
 insertMembershipType(bk):Observable<MembershipType>{
 
  return this.http.post<MembershipType>("http://localhost:8080/ToyBookLibraryApp/membershipType/insertmembershipType", bk); //string template
  }

  getAllMembershipTypes():Observable<MembershipType[]> {
   
        return this.http.get<MembershipType[]>("http://localhost:8080/ToyBookLibraryApp/membershipType/viewmembershipType");     
      }

      // updateMembershipType(membershipTypeId):Observable<MembershipType>{
      //   return this.http.put<MembershipType>(`http://localhost:8088/ToyBookLibraryApp/membershipType/updatemembership/${membershipTypeId}`);
      // }
      updateMembershipType(member:MembershipType):Observable<MembershipType>{
          return this.http.put<MembershipType>("http://localhost:8080/ToyBookLibraryApp/membershipType/updatemembership",member);
        }
        // updateTraveller(traveller: Traveller, id){
        //   return this.client.put(`${DATA_ACCESS_PREFIX}/${id}`, traveller);
        // }
        // deleteAdmin(adminId:number):Observable<Admin>{
        //   return this.http.delete<Admin>(`http://localhost:8088/ToyBookLibraryApp/admin/deleteadmin/${adminId}`);

        deleteMembershipType(membershipTypeId:number): Observable<MembershipType>{
            return this.http.delete<MembershipType>(`http://localhost:8080/ToyBookLibraryApp/membershipType/deletemembership/${membershipTypeId}`);
         
        }
}



