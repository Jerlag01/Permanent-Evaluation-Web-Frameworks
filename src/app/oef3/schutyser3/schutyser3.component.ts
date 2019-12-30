import { Component, OnInit, Input } from '@angular/core';
import { IMoney,IAllCoins, SchutyserService } from './schutyser.service';
import { VerhaegenService, IChuckNorrisJoke } from './../verhaegen3/verhaegen.service';
import { Server } from 'http';

@Component({
  selector: 'app-schutyser3',
  templateUrl: './schutyser3.component.html',
  styleUrls: ['./schutyser3.component.css']
})
export class Schutyser3Component implements OnInit {

  Money : IMoney;
  baseChoise : string = "EUR";

  MoneyChoices : IAllCoins[];
  selectedCoinBase:IAllCoins;
  selectedCoinConvert:IAllCoins;
  tempMoney: IMoney;
  selectedCours: number;

  Joke : IChuckNorrisJoke;

  constructor(private service: SchutyserService, private JokeService: VerhaegenService) { 
    this.MoneyChoices = this.service.PossibleCoins;    
  }

  ngOnInit() {    
    this.service.getAllCurrency(this.baseChoise).subscribe(result => {
      this.Money = result;     
    }); 
    this.getRandomJoke();      
  }

  async clickCalcMoney(){
    try { 
      this.tempMoney = await this.service.getSpecifiekCurrency(this.selectedCoinBase.Value, this.selectedCoinConvert.Value)   
      this.selectedCours = this.tempMoney.rates[Object.keys(this.tempMoney.rates)[0]];
      
    } catch(error){
      console.log("Something was wrong, sorry")
    }
  }
  async getRandomJoke(){
    try { 
      this.Joke = await this.JokeService.getRandomJoke()      
    } catch(error){
      console.log("error: Get Joke")
    }
  }

  
}