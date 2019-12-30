import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-verschooten',
  templateUrl: './verschooten.component.html',
  styleUrls: ['./verschooten.component.css']
})
export class VerschootenComponent implements OnInit {

  counter : number =0;
  random : number;
  theDate : Date;
  prijs : number =0;
  constructor() {
    this.updateValue();
    setInterval(this.updateValue, 2000);
    setInterval(this.Addnumber, 200);
    this.setCurrentTime();
    setInterval(this.setCurrentTime, 1000);
   }
  Addnumber = () =>{
    this.counter += 1;
  }

  ngOnInit() {
    
  }
  updateValue = () =>{
    this.random = _.random(1,100);}
    setCurrentTime =() =>{
      this.theDate = new Date();
    }
  Bereken = () =>{
    this.prijs += this.random
  }
  Verminderen = () =>{
    this.prijs -= this.counter;
  }
}
