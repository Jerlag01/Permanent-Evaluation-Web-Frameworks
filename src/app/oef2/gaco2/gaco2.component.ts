import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gaco2',
  templateUrl: './gaco2.component.html',
  styleUrls: ['./gaco2.component.css']
})
export class Gaco2Component implements OnInit {
  NumberOfSides:number=6;
  CurrentSide:number=1;
  DiceEditor:boolean;
  ShowHistory:boolean;
  DiceEditonButtonLabel: string = "Show Editor";
  HistoryOfRolls: Array<HistoryRoll> = [];
  HistoryCounter: number=0;
  RandomText:string;
  randomnum:number;
  thumpsuppic:string="https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Up_Hand_Sign_Emoji_large.png?v=1571606063";
  RollDice(){
    this.CurrentSide = Math.floor(Math.random() * this.NumberOfSides) + 1;
    this.HistoryOfRolls.push(new HistoryRoll(this.CurrentSide,this.HistoryCounter));
    this.RandomText = ""
    this.HistoryCounter++;

  }
  DontTouch(){
    
    this.randomnum = Math.floor(Math.random() * 3) + 1
    switch(this.randomnum){
      case(1):
        this.RandomText = "Please don't touch the dice."
      break;
      case(2):
        this.RandomText = "I was planning to make it animated but realized i was to lazy"
      break;
      case(3):
        this.RandomText = "Stop touching the dice!"
      break;
    }
  }

  ShowHideEditor(){
    if (this.DiceEditor == true){
      this.DiceEditor = false;
      this.DiceEditonButtonLabel = "Show Editor";
    }
    else {
      this.DiceEditonButtonLabel = "Hide Editor";
    this.DiceEditor = true;
    }
  }
  ShowHistorytoggle(){
    if (this.ShowHistory == true){
      this.ShowHistory = false;
    }
    else {
    this.ShowHistory = true;
    }
  }
  SetSides(i:number){
    this.NumberOfSides=i;
  }

  ngOnInit() {
  }

  
}
export class HistoryRoll{
  constructor(input:number, when:number){
    this.result = input;
    this.row = when;
  }
  result:number;
  row:number;
}
