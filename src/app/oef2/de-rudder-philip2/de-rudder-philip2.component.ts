import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-rudder-philip2',
  templateUrl: './de-rudder-philip2.component.html',
  styleUrls: ['./de-rudder-philip2.component.css']
})
export class DeRudderPhilip2Component implements OnInit {
  changeText: boolean;
  BackgroundC: string = "orange";
  ButtonName: string = "Toevoegen";
  url: string = "https://www.google.be/";
  public greeting = "";

  constructor() {
    this.changeText = false;
   }

  ngOnInit() {
  }
  
  StandaarBoodschappen = ['12 eieren', '5kg kippenwit', '2kg pasta', 'volkorenbrood'];
  addItem(newItem: string) {
    if (newItem) {
      this.StandaarBoodschappen.push(newItem);
    }

  }

 
  //array of months.
  months = ["January", "Feburary", "March", "April",
           "May", "June", "July", "August", "September",
           "October", "November", "December"];
  isavailable = true;
  myClickFunction(event) { 
     
     alert("Op button geklikt");
     console.log(event);
  }






  
}
