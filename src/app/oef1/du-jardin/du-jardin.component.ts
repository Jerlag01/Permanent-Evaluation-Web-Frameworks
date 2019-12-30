import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'
@Component({
  selector: 'app-du-jardin',
  templateUrl: './du-jardin.component.html',
  styleUrls: ['./du-jardin.component.css']
})
export class DuJardinComponent implements OnInit {
  naam:string= "Vincent Du Jardin"
  nu:Date;
  geld:number;
  counter:number =0;
  totaal:number;
    constructor() {
      setInterval(()=> {this.geld=_.random(1,1000)},5000),
      setInterval(()=>{this.totaal=this.geld-this.counter}),
      this.nu =new Date();
     }
  
    ngOnInit() {
    
    }
  get Counter()
  {
    return this.counter
  }
  set Counter(value:number)
  {
    this.counter=value;
  }
}
