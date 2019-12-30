import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hattas',
  templateUrl: './hattas.component.html',
  styleUrls: ['./hattas.component.css']
})
export class HattasComponent implements OnInit {

  studentName: string;
  timeNow: Date;
  timeZone : string;
  time : Date;

  constructor() {
    this.studentName = "Zeno Hattas";
  }
  get TimeNow() {
    return new Date();
  }
  set TimeZone(value:string){
    this.timeZone = value;
    console.log(value);
  }
  get TimeZone(){
    return this.timeZone;
  }
  
  SetTime(value : string){
    let str = value.split(':');
    console.log(str[0] +":"+str[1]);
    this.time = new Date;
    this.time.setUTCHours(Number(str[0]));
    this.time.setUTCMinutes(Number(str[1]));
  }
  ngOnInit() {
  }

}
