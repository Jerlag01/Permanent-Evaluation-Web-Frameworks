import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-al-shanawany2',
  templateUrl: './al-shanawany2.component.html',
  styleUrls: ['./al-shanawany2.component.css']
})
export class AlShanawany2Component implements OnInit {
  imageUrl   = "https://findicons.com/files/icons/2773/pictonic_free/128/angularjs.png"; 
   expression = false;
    fibArray =[0,	1,	1,	2,	3,	5,	8,  13, 21];
    ran;
     
     todayDate:Date;
  constructor() {
    setInterval(() => this.todayDate = new Date(), 1000);
    
   }
  start(){
    this.expression = !this.expression;
  }
  ChangeOpacity(event: MouseEvent): void {
    
    this.ran = _.random(0.5,1);
    //console.log(this.ran);
       return this.ran;
  }

  ngOnInit() {
  }

}
