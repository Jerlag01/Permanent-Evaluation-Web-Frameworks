import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cranshoff2',
  templateUrl: './cranshoff2.component.html',
  styleUrls: ['./cranshoff2.component.css']
})
export class Cranshoff2Component implements OnInit {

  item : number ;
  items : number [] = [];
  TotalAvrage : number =0;
  Xpos:number;
  Ypos:number;
  BackgroundColor:string;


  constructor() { }

  ngOnInit() {
  }

  addToList(){
    this.items.push(this.item);
    this.item =0;
  }

  verwijder(idx :number){
    this.items.splice(idx ,1);
  }

  ClearList(){
      this.items = [];
      this.TotalAvrage = 0;
  }

  CalculateAvrage(){
      for(let item of this.items){
        this.TotalAvrage =  this.TotalAvrage +  item ;
        console.log(this.TotalAvrage);      
      }
      console.log(this.TotalAvrage); 
      this.TotalAvrage =this.TotalAvrage/this.items.length
  }

  GetMousePosition(event:MouseEvent){
    this.Xpos= event.clientX
    this.Ypos= event.clientY
  }

  ChangeColor(color:string){
      this.BackgroundColor= color;
  }

}
