import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-ruys',
  templateUrl: './ruys.component.html',
  styleUrls: ['./ruys.component.css']
})
export class RuysComponent implements OnInit {
  uur: string;
  minuten: string;
  seconden: string;
  timestamp: Date;
  timeend: Date;
  title = 'app';
  hourrent = 1;
  minuterent = 5;
  secondrent =20;
  text ="Hello"
  getal: number;
  

  constructor() {
    //setInterval(this.seconden, 1000)
    this.timestamp = new Date();
    this.uur = _.padStart(this.timestamp.getHours().toString(), 2, "0");
    this.minuten = _.padStart(this.timestamp.getMinutes().toString(), 2, "0");
    this.seconden = _.padStart(this.timestamp.getSeconds().toString(), 2, "0");
    this.timeend = new Date();
    this.timeend.setHours(this.timeend.getHours()+this.hourrent);
    this.timeend.setMinutes(this.timeend.getMinutes()+this.minuterent);
    this.timeend.setSeconds(this.timeend.getSeconds()+this.secondrent);
    this.getal = (Math.random() * (0 - 100) + 100)
  } 
  
  ngOnInit() {

  }
}
