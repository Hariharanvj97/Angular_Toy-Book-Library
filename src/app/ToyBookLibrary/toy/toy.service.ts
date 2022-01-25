import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Toy } from '../model/toy';
@Injectable({
  providedIn: 'root'
})
export class ToyService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  private baseUrl="http://localhost:8080/ToyBookLibraryApp"
  // creating Book
  insertToy(bk):Observable<Toy>{
  
   return this.http.post<Toy>("http://localhost:8080/ToyBookLibraryApp/toy/insertToy", bk); //string template
   }
   getAllToy():Observable<Toy[]> {
   
    return this.http.get<Toy[]>("http://localhost:8080/ToyBookLibraryApp/toy/viewtoys");
    
  }
  deleteToy(toyId:number): Observable<Toy>{
    return this.http.delete<Toy>(`http://localhost:8080/ToyBookLibraryApp/toy/deletetoy/${toyId}`);
  }
  updateToy(bk:Toy):Observable<Toy>{
    return this.http.put<Toy>(`http://localhost:8080/ToyBookLibraryApp/toy/updateToy`,bk);
  
    }
    getToyById(toyId:any):Observable<Toy>{
      return this.http.get<Toy>(` http://localhost:8080/ToyBookLibraryApp/toy/viewtoyById/${toyId}`);
  
    
  
    }
}












