import { Book } from './book';
import { Child } from './Child';
import { Toy } from './toy';

export class LendItems {

    lendId:number;
    lendDate:any;
    returnDate:any;
    fine:number;
    book:Book;
    child:Child;
    toy:Toy;
  static lendId: any;


   constructor( lendId:number,lendDate:any,returnDate:any,fine:number,book:Book,child:Child,toy:Toy){

    this.lendId=lendId;
    this.lendDate=lendDate;
    this.returnDate=returnDate;
    this.fine=fine;
    this.book=book;
    this.child=child;
    this.toy=toy;
   }
} 