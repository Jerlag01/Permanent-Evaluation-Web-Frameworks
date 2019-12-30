import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-maene',
  templateUrl: './maene.component.html',
  styleUrls: ['./maene.component.css']
})
export class MaeneComponent implements OnInit {

  naam : string = "Alan Maene";
  birthday = new Date(1999, 6, 12);
  leeftijd : number = 20;
  dagen : number;
  randDate : Date;
  temp : number;
  
  constructor() {
    
    let date: Date = new Date();
    console.log("Date = " + date);
    this.dagen = date.getDay();
    
   }

   randomDate(){
       this.temp = (Math.random()*12+1);
      this.randDate = new Date((Math.random()*3000+1),(Math.random()*31+1),(Math.random()*12+1))
      

   }

  ngOnInit() {
  }
  

}


