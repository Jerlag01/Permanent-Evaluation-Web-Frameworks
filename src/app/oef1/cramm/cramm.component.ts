import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
@Component({
  selector: 'app-cramm',
  templateUrl: './cramm.component.html',
  styleUrls: ['./cramm.component.css']
})
export class CrammComponent implements OnInit {
  name: string;
  datum;
  dice:number;

  constructor() { 
    setInterval(()=> this.name = "charlie cramm")
    setInterval(()=> {this.datum = new Date()}, 1)
    this.dice=0;
  }

  ngOnInit() {
  }
  private setCurrentTime(){
   this.datum = moment();

  }
  RollDice=()=>{
    this.dice=_.random(2,12);
  }
}
