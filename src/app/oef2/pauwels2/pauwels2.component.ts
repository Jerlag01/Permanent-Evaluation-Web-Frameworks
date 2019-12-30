import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { th, tr } from 'date-fns/locale';

@Component({
  selector: 'app-pauwels2',
  templateUrl: './pauwels2.component.html',
  styleUrls: ['./pauwels2.component.css']
})
export class Pauwels2Component implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  //Yahtzee
  cijfers : number[] = [1,2,3,4,5];
  vast : boolean[] = [true, true, true, true, true];
  ableToReroll : boolean = true;
  timesRolled = 0;
  gezet : any[] = [];
  played : boolean = false;

  randomNumber(){
    for (let i = 0; i< 5; i++){
      if(this.vast[i]){
        this.cijfers[i] = Math.floor(Math.random()*6)+1;
      }
    }
    this.timesRolled++;
    if (this.timesRolled == 3){
      this.ableToReroll = false;
    }
    this.played = true;
  }

  zet(vastNummer : number, event){
      if(this.played){
        if(this.vast[vastNummer] == true){
          event.target.classList.add("vast");
          this.gezet.push(event);
          this.vast[vastNummer] = false;
        }else{
          this.vast[vastNummer] = true;
          event.target.classList.remove("vast");
        }
      }
  }

  restart(){
    for(let j = 0; j < 5; j++){
      this.cijfers[j] = j+1;
    }
    this.ableToReroll = true;
    this.timesRolled = 0;
    for(let j = 0; j < 5; j++){
      this.vast[j] = true;
    }
    for(let j = 0; j < this.gezet.length; j++){
      this.gezet[j].target.classList.remove("vast");
    }
    this.played = false;
  }

  //Input met placeholder en mouse binding
  hint : string = "Geef hier tekst in";

  show(event){
    event.target.classList.add("lightUp");
  }

  hide(event){
    event.target.classList.remove("lightUp");
  }

  job : string = "Author";
}
