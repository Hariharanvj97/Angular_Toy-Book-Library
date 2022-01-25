export class Child {

    childId:number;
    address:string;
    email:string;
    gender:string;
    mobile:string;
    password:string;
    username:string;
   dob:any;
    parentId:number;

   constructor(childId:number,address:string,email:string,gender:string,mobile:string,password:string,username:string,dob:any,parentId:number) {
    this.childId = childId;
    this.address = address;
    this.email = email;
    this.gender = gender;
    this.mobile = mobile;
    this.password = password;
    this.username = username;
   
    this.dob = dob;
    this.parentId = parentId; 
} 

}
