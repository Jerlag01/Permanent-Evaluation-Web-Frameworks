import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-janssens2',
  templateUrl: './janssens2.component.html',
  styleUrls: ['./janssens2.component.css']
})
export class Janssens2Component implements OnInit {

  teRadenGetal: number = _.random(0, 10);
  gebruikerGetal: number;
  gegokteGetallen: number [] = [];
  inputGetal: number;
  buttonContent: string = "Vergelijk";
  Goed: string = "green";

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any){
    this.addToLijst();
    this.gebruikerGetal = event.target.value;
  }

  vergelijk(){
    this.gebruikerGetal = this.inputGetal;
  }

  addToLijst(){
    this.gegokteGetallen.push(this.inputGetal);
  }

  clearLijst(){
    this.gegokteGetallen = [];
  }
}
