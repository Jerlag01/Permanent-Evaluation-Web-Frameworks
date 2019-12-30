import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Circle } from './circle';

@Component({
  selector: 'app-wats',
  templateUrl: './wats.component.html',
  styleUrls: ['./wats.component.css']
})
export class WatsComponent implements OnInit {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  pizzaCounter: number = 1;
  oldPizzaCounter: number = 1;
  peopleCounter: number = 1;
  oldPeopleCounter: number = 1;
  percentage: number = 1;
  frequency = 100;
  pizzas: string
  people: string
  constructor() { }

  ngOnInit() {
    setInterval(this.Update,this.frequency);
    this.canvas = <HTMLCanvasElement>document.getElementById("flower");
    this.context = this.canvas.getContext("2d");
    this.Draw();
  }

  Draw(){
    var i = 0;
    this.canvas.height=100+Math.floor(this.percentage/7)*40;
    var angle = this.percentage;
      while(i<this.percentage){
        var cirkel = new Circle(60+(i%8)*50,20+50*Math.floor(i/8));
        if(angle>=1){
          cirkel.draw(this.context,1);
        }else{
          cirkel.draw(this.context,angle);
        }
        this.context.save();
        i++;
        angle--;
      }
  }

  Update = () =>{
    if(this.oldPeopleCounter!=this.peopleCounter || this.oldPizzaCounter!=this.pizzaCounter){
      this.oldPeopleCounter=this.peopleCounter;
      this.oldPizzaCounter=this.pizzaCounter;
      if(this.peopleCounter>0){
        this.percentage = this.pizzaCounter/this.peopleCounter;
      }else{
        this.percentage=0;
      }
      this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
      this.Draw();
    }
    if(this.peopleCounter==1){
      this.people="persoon";
    }else{
      this.people="personen";
    }
    if(this.pizzaCounter==1){
      this.pizzas="pizza";
    }else{
      this.pizzas="pizza's";
    }
  }
}
