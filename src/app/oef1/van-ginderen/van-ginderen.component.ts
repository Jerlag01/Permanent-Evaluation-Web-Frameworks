import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { stringify } from 'querystring';

@Component({
  selector: 'app-van-ginderen',
  templateUrl: './van-ginderen.component.html',
  styleUrls: ['./van-ginderen.component.css']
})
export class VanGinderenComponent implements OnInit {

  title : string = "test";
  tijd : Date;
  timer : number = 0;
  nummer : number;
  birthday = new Date(1988, 3, 15);
  person : string; //ngif will work as soon as there is a string in here
  personselected: boolean = false;
  name: string;
  date(){
    //get a date from a server or something
    //and return it here as a string or something
    return "15:23:12";
  }


  constructor() {
    this.tijd = new Date();
   //setInterval(this.updatedatum, 1000);
    setInterval(this.updatetimer, 200);
    setInterval(this.updatenumber, 500);
   }

   updatedatum = () =>{
    this.tijd = new Date();
    this.birthday = this.tijd;
   }

   updatetimer = () => {
    this.timer += 1;
   }

   updatenumber = () =>{
     this.nummer = _.random(50, 100);
   }

   updateperson = () =>{
     this.name = ((document.getElementById("name") as HTMLInputElement).value);
     //this method will update the person and activate the ngif
     this.person = this.name;
     this.personselected = true;
     if(this.name == ""){
       this.personselected = false;
     }
   }
  ngOnInit() {
  }

}

