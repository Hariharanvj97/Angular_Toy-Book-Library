export class MembershipType {
    membershipTypeId:number;
    description:string;
    durationMonths: number;
    price: number;

    constructor (membershipTypeId:number, description:string, durationMonths: number, price: number){
       this.membershipTypeId = membershipTypeId;
		this.description = description;
		this.durationMonths = durationMonths;
		this.price = price;
    }
        
}
