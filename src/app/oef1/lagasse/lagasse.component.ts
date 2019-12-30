import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lagasse',
  templateUrl: './lagasse.component.html',
  styleUrls: ['./lagasse.component.css']
})
export class LagasseComponent  {
  isShow = true;
 
  counter
  voornaam
  achternaam
  straat
  nummer
  postcode
  gemeente

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  constructor() { }


  SetCounter(value) {}
}