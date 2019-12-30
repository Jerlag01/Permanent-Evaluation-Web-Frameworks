import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { setInterval } from 'timers';

@Component({
  selector: 'app-gevers',
  templateUrl: './gevers.component.html',
  styleUrls: ['./gevers.component.css']
})
export class GeversComponent implements OnInit {
  
  tekst:string ="welkom!";
  PrijsBenzine:number= 1; 
  hoeveelheid:number = 0; 
  aantal_km:number=12;
  
  constructor() {
   setInterval(()=> {this.PrijsBenzine = Math.random()*5},5000);
   }   

  ngOnInit() {
  }

  get Hoeveelheid(){
    return this.hoeveelheid
  }
  set Hoeveelheid(value:number){
    this.hoeveelheid =value
  }

}
