import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Child } from '../model/child'; 
import { Observable } from 'rxjs';
import { Login } from '../model/login';


@Injectable({
  providedIn: 'root'
})
export class ChildService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8080/ToyBookLibraryApp"
  
  childLogin(login:Login){
   // alert("loginService: "+JSON.stringify(login));
    return this.http.post("http://localhost:8080/ToyBookLibraryApp/child/validatePassword", login);
  }

   addChild(cd):Observable<Child>{
    return this.http.post<Child>("http://localhost:8080/ToyBookLibraryApp/child/insertchild", cd); //string template
  }

  getAllChild():Observable<Child[]> {
   
    return this.http.get<Child[]>("http://localhost:8080/ToyBookLibraryApp/child/viewchild");
    
  }
  getChildByID(childId:number):Observable<Child>{
   return this.http.get<Child>(`http://localhost:8080/ToyBookLibraryApp/child/viewchildById/${childId}`);
    
}

deleteChild(childId:number):Observable<Child>{
  return this.http.delete<Child>(` http://localhost:8080/ToyBookLibraryApp/child/deletechild/${childId}`);

}

updateChild(cd:Child):Observable<Child>{
  return this.http.put<Child>("http://localhost:8080/ToyBookLibraryApp/child/child",cd);
}


}
