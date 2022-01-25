export class Admin {
        adminId:number;
        username:string;
        password: string;
        mobile: number;
        address: string;
        email: string;
        gender:string;
       
    
       constructor(adminId:number, username:string, password:string,  mobile:number,  address:string, email:string, gender:string) {
       
        this.adminId = adminId;
        this.username = username;
        this.password =password;
        this.mobile = mobile;
        this.address= address;
        this.email = email;
        this.gender= gender;
        }
    } 
    

