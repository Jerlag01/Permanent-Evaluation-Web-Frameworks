import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Circle } from './circle';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-wats2',
  templateUrl: './wats2.component.html',
  styleUrls: ['./wats2.component.css']
})
export class Wats2Component implements OnInit {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  BalCounter = 0;
  speed = 0;
  balList = [];
  public verwijderBalCounter: number;
  buttonText;
  numberInList = 1;
  warning;
  
  constructor() { }

  ngOnInit() {
    setInterval(this.Update,50);
    this.canvas = <HTMLCanvasElement>document.getElementById("balls");
    if(this.canvas!=null){
      this.context = this.canvas.getContext("2d");  
    }
    this.numberInList = 1;
    this.verwijderBalCounter = 1;
    this.UpdateText();
  }

  UpdateText(){
    if(this.BalCounter>0){
      this.buttonText = "Verwijder element " + this.verwijderBalCounter + " in de lijst";
    }else{
      this.buttonText = "";
      this.verwijderBalCounter=1;
    }
  }

  Draw(){
    this.canvas.height = 500;
    this.canvas.width = 500;
    for(var i = 0;i<this.BalCounter;i++){
      var cirkel = new Circle(250,250,this.speed,this.numberInList,"");
      cirkel.draw(this.context);
      this.context.save();
    }
  }

  Update = () =>{
    this.UpdateText();
    if(this.BalCounter>this.balList.length){
      for(var i = this.balList.length;i<this.BalCounter;i++){
        this.balList.push(new Circle(250,250,this.speed,this.numberInList,""));
        this.updateNumberInList();
      }
    }else if(this.BalCounter<this.balList.length){
      for(var i = this.balList.length;i>this.BalCounter;i--){
        this.balList.pop();
        this.updateNumberInList();
      }
    }
    if(this.BalCounter>0){
      this.canvas = <HTMLCanvasElement>document.getElementById("balls");
      this.context = this.canvas.getContext("2d");
    }
    if(this.context!==undefined){
      this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    this.balList.forEach(cirkel => {
      cirkel.Update();
      cirkel.draw(this.context);
    });
  }

  public UpCounter(){
    if(this.verwijderBalCounter<this.balList.length){
      this.verwijderBalCounter++;
    }
  }

  public DownCounter(){
    if(this.verwijderBalCounter>1){
      this.verwijderBalCounter--;
    }
  }

  updateNumberInList(){
    var index = -1;
    var balNumbers = [];
    for(var i = 0;i<this.balList.length;i++){
      balNumbers[i] = i+1;
    }
    for(var i = 0;i<this.balList.length;i++){
      for(var j = 0;j<this.balList.length;j++){
        if(balNumbers[j]==this.balList[i].number){
          balNumbers.splice(j,1);
        }
      }
    }
    if(balNumbers.length==0){
      this.numberInList = this.balList.length+1;
    }else{
      this.numberInList = balNumbers[0];
    }
  }

  public Verwijder(){
    this.balList.splice(this.verwijderBalCounter-1,1);
    this.BalCounter--;
    this.updateNumberInList();
    this.UpdateText();
    this.verwijderBalCounter=1;
  }

  Geklikt(event: MouseEvent){
    this.warning = "";
  }

  GaatKlikken(event: MouseEvent){
    this.warning = "Je gaat Bal: " + this.balList[this.verwijderBalCounter-1].number + " verwijderen.";
  }

  AddBall(kleur: string){
    this.BalCounter++;
    this.balList.push(new Circle(250,250,this.speed,this.numberInList,kleur));
    this.updateNumberInList();
  }
}
