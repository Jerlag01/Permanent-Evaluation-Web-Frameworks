import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-rudder-c',
  templateUrl: './de-rudder-c.component.html',
  styleUrls: ['./de-rudder-c.component.css']
})
export class DeRudderCComponent implements OnInit {

  dranken: string[] = ["Cola", "Fanta", "Iced Tea", "Jupiler", "Wijn"]
  prijzen: number[] = [1.7,1.8,2.5,2.3,3]
  aantal: number[] = [0,0,0,0,0]
  totaal: number = 0;
  procent: number = 0;
  datum: Date = new Date();
  
  constructor() { 
    this.datum.setTime(Date.now());;
  }

  ngOnInit() {
  }

  Bestel(){
    for(var _i = 0; _i < this.dranken.length; _i++){
      this.totaal += (this.aantal[_i] * this.prijzen[_i])
    }
  }

}
