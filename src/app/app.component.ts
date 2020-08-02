import { Component } from '@angular/core';
import { Firstname } from './firstname';
import { Surname } from './surname';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registrationApp1';
  registerApp = new Array();
  item;
  surname;
  id;
  email;
  contact;
  showAddbtn = true;
  showUpdatebtn = false;
  editId;

  addFirstname(){
        this.registerApp.push(new Firstname(this.item, this.surname, this.id, this.email, this.contact));
        console.log(this.registerApp);
  }
  delete(i){
    this.registerApp.splice(i, 1) ;   
}
update(){
  this.registerApp.splice(this.editId , 1 , new Firstname(this.item, this.surname, this.id, this.email, this.contact));
  this.showAddbtn = true;
  this.showUpdatebtn = false;
}
edit(i){
this.item = this.registerApp[i].item;
this.surname = this.registerApp[i].surname;
this.id = this.registerApp[i].id;
this.email = this.registerApp[i].email;
this.contact = this.registerApp[i].contact;
this.showAddbtn = false;
this.showUpdatebtn = true;
this.editId = i;
console.log(this.item);
}

}




