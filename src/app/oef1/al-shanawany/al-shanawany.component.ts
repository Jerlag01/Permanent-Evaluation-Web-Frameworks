import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-al-shanawany',
  templateUrl: './al-shanawany.component.html',
  styleUrls: ['./al-shanawany.component.css']
})
export class AlShanawanyComponent implements OnInit {
  UserNumber :number;
  isPrime :boolean ;
  uur :number;
  min : number; 
  seconds: number;
  todayDate : Date;
  
  Random : number ;
    constructor() { 
      setInterval(() => this.todayDate = new Date(), 1000);
      setInterval(()=> this.Random = _.random(0,1),666);
     }
    
  setPrime(value: number){
     this.UserNumber  = value;
     console.log(value);
  }
   
    ngOnInit() {
    }
     
  
  
  
     ifPrime() {
         console.log(this.UserNumber);
          
          for(var i = 2; i < this.UserNumber; i++) {
              if(this.UserNumber % i === 0) {
                  return this.isPrime = false;
              }
          }
          return this.isPrime =true ;
       
    }
}
