import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-davalos',
  templateUrl: './davalos.component.html',
  styleUrls: ['./davalos.component.css']
})
export class DavalosComponent implements OnInit {

  datum : Date;
   onoff: boolean = false;
   random : number ;
   n: string = " ";
   alert: string;
   tijd = Date.now();

  constructor() { 
    setInterval(this.updateDate,1000)
  }
  

  add(value:number = 0){
      this.n += value.toString();
  }

  bel(){
    this.alert = "je hebt geen saldo!"
    setInterval(() => {
      this.alert = ""
    }, 2000);
    this.n = " ";

  }

  del(){
    this.n = this.n.slice(0,-1) ; this.n;
  }

  status(){
    if(this.onoff == false){
      this.alert = "OFF..."
      this.n = " ";

      this.onoff = true;
    }
    else{
      this.alert = "back ON!"
      setInterval(() => {
      this.alert = ""
      }, 5000);
      this.onoff = false;
    }
  }

  updateDate =() => {
    this.datum = new Date();
  }
 
  ngOnInit() {
  }

}



