import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-quinten-schutyser',
  templateUrl: './quinten-schutyser.component.html',
  styleUrls: ['./quinten-schutyser.component.css']
})
export class QuintenSchutyserComponent implements OnInit {

  currentDate : Date;
  Userbirthday : Date;
  NameCreator : string;  
  userAge: Date;

  //convert euro naar dollar
  beginWaarde : number = 0;
  convertDollar :number = 0;
  convertPont :number = 0;
  convertFrankZwitserland :number = 0;
  koersDollar: number = 1.10;
  koersPont: number = 0.86 ;
  koesrFrankZwitserland : number = 1.09;

  constructor() {
    this.NameCreator = "Quinten Schutyser";
    setInterval(this.setTime, 1000);    
   }

  ngOnInit() {
  }

  setbirthday(value : Date):void{
    this.Userbirthday = value;
  }

  setTime = () => {
    this.currentDate = new Date();
  }

  convertFromEuro(value: number):void{
    this.beginWaarde = value;
    this.convertDollar = this.beginWaarde * this.koersDollar; 
    this.convertPont = this.beginWaarde * this.koersPont;
    this.convertFrankZwitserland = this.beginWaarde * this.koesrFrankZwitserland;
  }
}
