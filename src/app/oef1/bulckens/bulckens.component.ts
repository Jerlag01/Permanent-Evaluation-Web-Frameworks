import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulckens',
  templateUrl: './bulckens.component.html',
  styleUrls: ['./bulckens.component.css']
})
export class BulckensComponent implements OnInit {

    autos: number = 0;
    teller2: number = 1;
    
    dateArray: Date[] = [];
    
   

    toggle = true; // start with true == shortDate


    get format()   { return this.toggle ? 'dd/MM/yy' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
  
    constructor() {
      
      setInterval(() => this.teller2++, 300)
      setInterval(() => this.autos = Math.floor(this.teller2/ 20), 10)
     
     }
  
    ngOnInit() {
      
      for (let i = 0; i < 9; i++) {
        this.dateArray.push(this.randomDate(new Date(0), new Date()))
      }
    }
    
  randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  

}
