import { Component, OnInit } from '@angular/core';
import { TikTakToe } from './Helpers/TikTakToe';
import { ButtonModule } from 'primeng/button';
import { Key } from 'protractor';


@Component({
  selector: 'app-hattas2',
  templateUrl: './hattas2.component.html',
  styleUrls: ['./hattas2.component.css']
})
export class Hattas2Component implements OnInit {
  Game: TikTakToe;
  GameOn: boolean;
  public GameWon: boolean;
  Player: string;
  buttonName: number;
  public StatusText: string;
  statusTextTemplates: string[];
  char1: string;
  char2: string;
  counter : number;
  timer : number;
  OptionsSelected : boolean;

  constructor() {
    this.Game = new TikTakToe;
    this.GameOn = false;
    this.GameWon = false;
    this.OptionsSelected = false;
    this.Player = "Player 1";
    this.StatusText = "Press a button to start";
    this.char1 = "O";
    this.char2 = "X";
    this.statusTextTemplates = [
      "Almost there",
      "Just one more click",
      "Don't give up now",
      "Have you figured it out yet?",
      "Try a diffrent button",
      "Do you think you can still win?",
      "I believe in you"
    ];
    setInterval(this.UpdateCounter, 1000);
  }

  ngOnInit() {
  }

  public SetEllement(buttonName: any) {
    var r = Math.floor(Math.random() * 3);
    if (r == 0) {
      this.Game.SetgridEllement(this.char1, Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));
    } else if (r == 1) {
      this.Game.SetgridEllement(this.char2, Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));
    } else if (r == 2) {
      this.Game.SetgridEllement(" ", Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));
    }
    this.ChangePlayer();
    this.CheckGameWon();
    this.ChangeStatusText();
  }
  private CheckGameWon() {
    this.GameWon = this.Game.GameWon();
  }
  private ChangeStatusText() {
    if (this.GameWon) {
      this.StatusText = "You Won";
    }
    else {
      this.StatusText = this.statusTextTemplates[Math.floor(Math.random() * this.statusTextTemplates.length)];
    }
  }
  private ChangePlayer() {
    if (this.Player == "Player 1")
      this.Player = "Player 2";
    else
      this.Player = "Player 1";
  }

  public StartGame(c1: string, c2: string, counter : number): void {
    if (c1 != "")
      this.char1 = c1;
    if (c2 != "")
      this.char2 = c2;
    if(counter > 0)
      this.counter = counter;
    this.GameOn = true;
  }
  public StartGameNormal():void{
    this.GameOn = true;
  }

  public StopGame(): void {
    this.Game.Resetgrid();
    this.GameOn = false;
    this.GameWon=false;
    this.char1="O";
    this.char2="X";
    this.counter=0;
    this.OptionsSelected=false;
  }

  get ButtonName() {
    if (this.buttonName < 9)
      this.buttonName++;
    else
      this.buttonName = 1;
    return this.buttonName.toString;
  }

  get Counter(){
    return this.counter;
  }

  public UpdateCounter = () =>{
    if(this.counter>0)
      this.counter--;
    if(this.counter == 0 ){
      this.counter--;
      this.StopGame();
    }
  }

  public ShowOptions():void{
    this.OptionsSelected = true;
  }

}
