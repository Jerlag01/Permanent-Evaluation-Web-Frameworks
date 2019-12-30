import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cranshoff',
  templateUrl: './cranshoff.component.html',
  styleUrls: ['./cranshoff.component.css']
})
export class CranshoffComponent implements OnInit {


  bedrag: number;
  dollarBedrag: number ;

  dollarRate : number = 1.1049;
  datum  : Date  = new Date();

 
  minRandom : number;
  maxRandom : number;
  randomNr : number;

  constructor() { 
    setInterval(()=> this.UpdateDateTime(), 1000);
  }


  ngOnInit() {
  }

  UpdateDateTime=()=>{
    this.datum = new Date();
  }

  exchange(){
    this.dollarBedrag = this.bedrag*this.dollarRate;
  }

  getrandomNumber(){
    this.minRandom = Math.ceil(this.minRandom);
    this.maxRandom = Math.floor(this.maxRandom);
    var random=  Math.floor(Math.random() * (this.maxRandom - this.minRandom + 1)) + this.minRandom;
    this.randomNr= random;
  }

}
