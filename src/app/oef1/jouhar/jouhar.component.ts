import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jouhar',
  templateUrl: './jouhar.component.html',
  styleUrls: ['./jouhar.component.css']
})
export class JouharComponent implements OnInit {
  Getal:number;
  Tijd:Date;
  Naam : string;
  Voornaam:string;
  _Datum:Date;

  constructor() 
  {
    setInterval(this.Random,1000);
    setInterval(this.UpdateTijd,1000);
    setInterval(this.ToonNaam,1000);
    setInterval(this.Datum,1000);
  }
  UpdateTijd=()=>
  {
    this.Tijd = new Date();
  }
  Random=()=>
  {
    this.Getal = Math.floor((Math.random()*100)+1);
  }
  ToonNaam=()=>
  {
    this.Naam = "Youssef";
    this.Voornaam = "Jouhar";
  }
  Datum=()=>
  {
    this._Datum = new Date();
  }
  ngOnInit() {
  }

}
