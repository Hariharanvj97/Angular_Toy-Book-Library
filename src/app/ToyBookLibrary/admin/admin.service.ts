import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  private baseUrl="http://localhost:8080/ToyBookLibraryApp"
 
  adminLogin(login:Login){
    console.log("loginService: "+JSON.stringify(login));
    return this.http.post("http://localhost:8080/ToyBookLibraryApp/admin/validatePassword", login);
  }
  insertAdmin(bk):Observable<Admin>{
 
  return this.http.post<Admin>("http://localhost:8080/ToyBookLibraryApp/admin/insertadmin", bk); //string template
  }

  getAllAdmins():Observable<Admin[]> {
   
        return this.http.get<Admin[]>("http://localhost:8080/ToyBookLibraryApp/admin/viewadmin");     
      }

      updateAdmin(bk:Admin):Observable<Admin>{
          return this.http.put<Admin>("http://localhost:8080/ToyBookLibraryApp/admin/updatadmin",bk);
        }
        // deleteAdmin(adminId:number):Observable<Admin>{
        //   return this.http.delete<Admin>(`http://localhost:8080/ToyBookLibraryApp/admin/deleteadmin/${adminId}`);

        deleteAdmin(adminId:number): Observable<Admin>{
            return this.http.delete<Admin>(`http://localhost:8080/ToyBookLibraryApp/admin/deleteadmin/${adminId}`);
         
        }
}




//   constructor(private http:HttpClient) { }


// private baseUrl="http://localhost:8088/ToyBookLibraryApp"
//  // creating Book
//   addBook(bk):Observable<Book>{
 
//   return this.http.post<Book>("http://localhost:8088/ToyBookLibraryApp/book/insertBook", bk); //string template
//   }

//   getAllBooks():Observable<Book[]> {
   
//     return this.http.get<Book[]>("http://localhost:8088/ToyBookLibraryApp/book/viewbooks");
    
//   }

//   getBookByID(bookId:number):Observable<Book>{
//     //return this.http.get<Student>(`http://localhost:8081/RestStudent/rest/Students/${empId}`);
//     return this.http.get<Book>(`http://localhost:8088/ToyBookLibraryApp/book/viewbooksById/${bookId}`);
// }

// deleteBook(bookId:number):Observable<Book>{
//   return this.http.delete<Book>(`http://localhost:8088/ToyBookLibraryApp/book/deletebook/${bookId}`);

// }

// updateBook(bk:Book):Observable<Book>{
//   return this.http.put<Book>(`http://localhost:8088/ToyBookLibraryApp/book/books/${bk.bookId}`,bk);
// }

// }


