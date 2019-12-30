import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-senten',
  templateUrl: './senten.component.html',
  styleUrls: ['./senten.component.css']
})
export class SentenComponent implements OnInit {

  constructor() { 
    setInterval(() => this.naam = "Maximilian Senten")
    setInterval(() => this.klas = "2ea1-cloud")
    setInterval(() => {this.datum = new Date()}, 1);
  }
  hours: string;
  minutes: string;
  seconds: string;
  datum : Date;
  private timerId = null;

  naam : string;
  klas: string;

  tussen = true;
  corgraad: number [] = [0,0];
  corminsec: number [] = [0,0,0,0];
  breedte: string;
  lengte: string;

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime1();
    this.setRan();
    this.timerId = this.updateTime2();
    
  }
  private setRan() {
    this.corgraad[0] = _.random(1,180);
    this.corgraad[1] = _.random(1,360);
    
    if(this.corgraad[0]> 90){
      this.corgraad[0] = this.corgraad[0] - 90;
      this.breedte = "N";
    }else{
      this.breedte = "Z";
    }

    if(this.corgraad[1]> 180){
      this.corgraad[1] = this.corgraad[1] - 180;
      this.lengte = "O";
    }else{
      this.lengte = "W";
    }
    for (let item in this.corminsec) {
      this.corminsec[item] = _.random(1,60);
    }
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  get format()   { return this.tussen ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.tussen = !this.tussen; }

  private updateTime1(){
    setInterval(()=>{this.setCurrentTime();}, 1000);
  }
  private leftPadZero(value:number){
    return value < 10 ?`0${value}` : value.toString();
  }
  private updateTime2(){
    setInterval(()=>{this.setRan();}, 3000);
  }

}
