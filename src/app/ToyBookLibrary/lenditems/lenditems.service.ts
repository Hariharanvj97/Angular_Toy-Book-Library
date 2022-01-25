import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LendItems } from '../model/model/LendItems';

@Injectable({
  providedIn: 'root'
})
export class LenditemsService {
  lendItems: LendItems[] = [];

  private basePath= "http://localhost:8080/ToyBookLibraryApp"

  constructor(private http:HttpClient) {

   }

insertItems(items:LendItems):Observable<LendItems>{
     console.log(JSON.stringify(items))
    return this.http.post<LendItems>("http://localhost:8080/ToyBookLibraryApp/lenditem/insertLend",items);
}

getAllLendItems():Observable<LendItems[]> {
  return this.http.get<LendItems[]>("http://localhost:8080/ToyBookLibraryApp/lenditem/lendlist"); 
}

// getBookByID(bookId:number):Observable<B>{
//   //return this.http.get<Student>(`http://localhost:8081/RestStudent/rest/Students/${empId}`);
//   return this.http.get<Book>(`http://localhost:8088/ToyBookLibraryApp/book/viewbooksById/${bookId}`);
// }

deleteLendItems(lendId:number):Observable<LendItems>{
return this.http.delete<LendItems>(`http://localhost:8080/ToyBookLibraryApp/lenditem/lenddel/${lendId}`);

}

updateLendItems(LendItems):Observable<LendItems>{
  console.log(JSON.stringify(this.lendItems))
return this.http.put<LendItems>(`http://localhost:8080/ToyBookLibraryApp/lenditem/lendput`,LendItems);
}
updateLend(lendId:number):Observable<LendItems>{
  // console.log(JSON.stringify(this.lend))
return this.http.put<LendItems>(`http://localhost:8080/ToyBookLibraryApp/lenditem/lendput/${lendId}`,LendItems);
}
getById(lendId:number):Observable<LendItems>{
  console.log(JSON.stringify(lendId))
  return this.http.get<LendItems>(`http://localhost:8080/ToyBookLibraryApp/lenditem/viewLendById/${lendId}`);
  
  }
}
