import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { Parent } from '../model/parent'; 


@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) {}

  private baseUrl="http://localhost:8080/ToyBookLibraryApp"

  childLogin(login:Login){
    // alert("loginService: "+JSON.stringify(login));
     return this.http.post("http://localhost:8080/ToyBookLibraryApp/parent/validatePassword", login);
   }

  addParent(pt):Observable<Parent> {
 
    return this.http.post<Parent>("http://localhost:8080/ToyBookLibraryApp/parent/insertparent", pt); //string template
    }

    getAllParents():Observable<Parent[]> {
   
      return this.http.get<Parent[]>("http://localhost:8080/ToyBookLibraryApp/parent/viewparents");
      
    }
    updateParent(pt:Parent):Observable<Parent>{
      return this.http.put<Parent>(`http://localhost:8080/ToyBookLibraryApp/parent/parents`,pt);
    }

    deleteParent(parentId:number):Observable<Parent>{
      return this.http.delete<Parent>(` http://localhost:8080/ToyBookLibraryApp/parent/deleteparent/${parentId}`);
    
    }
    getParentById(parentId:any):Observable<Parent>{
      return this.http.get<Parent>(` http://localhost:8080/ToyBookLibraryApp/parent/viewparentsById/${parentId}`);
    
    }
}
