import { Component, OnInit } from '@angular/core';
import * as _ from "lodash"

@Component({
  selector: 'app-florus',
  templateUrl: './florus.component.html',
  styleUrls: ['./florus.component.css'],
  
})
export class FlorusComponent implements OnInit {

  
  Naam = "Pieter Florus";
  punten : number;
  datum : Date;
  

  constructor() { 
    setInterval(this.NieuwPunt, 1000),
    setInterval(this.vandaag, 1000)
  }

  NieuwPunt = () => {
    this.punten = _.random(0.1,10.0);
  }

  vandaag = () =>{
    this.datum = new Date();
  }
  

  ngOnInit() {
  }

}
