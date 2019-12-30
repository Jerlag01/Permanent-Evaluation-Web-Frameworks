import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jongenelen2',
  templateUrl: './jongenelen2.component.html',
  styleUrls: ['./jongenelen2.component.css']
})
export class Jongenelen2Component implements OnInit {

  wachtwoord: string;
  lijst : string[]= [];
  x:number;
  y:number;
  show:boolean =false;
  Fb:number =250;
  Fh:number= 250;
  constructor() { }

  add(){
    console.log("knop werkt");
    this.lijst.push(this.wachtwoord);
    
  }

  GetPosition(event:MouseEvent){
   this.x =  event.clientX;
   this.y = event.clientY;
  }

  clear(){
    this.lijst=[];
  }

  ngOnInit() {
  }

}
