import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sara-beeckmans',
  templateUrl: './sara-beeckmans.component.html',
  styleUrls: ['./sara-beeckmans.component.css']
})
export class SaraBeeckmansComponent implements OnInit {


  constructor() { }

  birthday: Date;
  randomValue: Number = 0;
  randomNumber1: number = 0;
  randomNumber2: number = 0;
  result: number = 0;
  tekst: string;

  ngOnInit() {
    this.ShowBirthdate();
    this.ShowRandomValue();


    this.CalculateRandomValue();
    if(this.result>20){
      this.tekst = "Het getal is boven 20."
    }
    else{
      this.tekst = "Het getal is kleiner dan 20."
    }
  
  
  }

  ShowBirthdate (){
    this.birthday = new Date(1999, 10, 10); 
  }

  CalculateRandomValue(){ 
    this.randomNumber1 = (Math.random() * 50) + 1
    this.randomNumber2 = (Math.random() * 50) + 1

    this.result = this.randomNumber1 + this.randomNumber2;

  }

  ShowRandomValue(){
    this.randomValue = Math.random();
  }

  
}
