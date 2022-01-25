import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8080/ToyBookLibraryApp"
 // creating Book
  insertBook(bk):Observable<Book>{
 
  return this.http.post<Book>("http://localhost:8080/ToyBookLibraryApp/book/insertBook", bk); //string template
  }

  getAllBook():Observable<Book[]> {
   
    return this.http.get<Book[]>("http://localhost:8080/ToyBookLibraryApp/book/viewbooks");     
  }

  deleteBook(bookId:any):Observable<Book>{
    return this.http.delete<Book>(` http://localhost:8080/ToyBookLibraryApp/book/deletebook/${bookId}`);
  
  }
  updateBook(bk:Book):Observable<Book>{
  
    return this.http.put<Book>(`http://localhost:8080/ToyBookLibraryApp/book/books`,bk);
    }
  
   
    getBookById(bookId:any):Observable<Book>{
      return this.http.get<Book>(` http://localhost:8080/ToyBookLibraryApp/book/viewbooksById/${bookId}`);
    
    }

}
