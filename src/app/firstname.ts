export class Firstname {  
    email: String;
    id: Number;
    surname:String;
    item :String;
    isDone: boolean;
    contact: Number;
    constructor(item, surname, id, email, contact){
        this.item =item;
        this.isDone = false;
        this.surname = surname;
        this.id = id;
        this.email = email;
        this.contact = contact;
        
    }
}
