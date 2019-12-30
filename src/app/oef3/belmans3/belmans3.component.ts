import { Component, OnInit } from '@angular/core';
import { BelmansService, IDogBreeds, IRandomDog} from "./belmans.service";
import { GeversService } from "../gevers3/gevers.service";
import { Bier } from "../gevers3/InterfaceBier";

@Component({
  selector: 'app-belmans3',
  templateUrl: './belmans3.component.html',
  styleUrls: ['./belmans3.component.css']
})
export class Belmans3Component implements OnInit {
  messageToSend: string = 'Sander Belmans component';
  randomDog: IRandomDog;
  dogBreeds: IDogBreeds;
  points: number = 0;
  answer: Boolean = false;
  guessDog: string;
  imageDog: string;
  beers: Bier[];
  
  constructor(private dogSvc: BelmansService, private GeversService: GeversService) {
    //For easy debugging purposes, the first one is labrador.
    this.imageDog = "labrador"
  }

  ngOnInit() { 
    this.GeversService.getRandomBier().subscribe(data => this.beers=data)
   }
  OnInput(event: any) {
    this.guessDog = event.target.value;
    if (this.guessDog == this.imageDog){
      this.answer = true
    }
    else if (this.guessDog != this.imageDog){
      this.answer = false
    }
    this.guessTheDog()
    }
  getNewRandomDog(){
    this.dogSvc.getRandomDog().subscribe(res=>
      this.randomDog = res);
    this.getDogBreeds()
  }
  getDogBreeds(){
    this.dogSvc.getDogBreeds().subscribe(res=>
      this.dogBreeds = res);
    this.imageDog = this.randomDog.message.slice(30,35);
  }
  guessTheDog(){
    if (this.answer == true) {
      this.points = this.points + 1;
    }
    else if (this.answer == false) {
      this.points = this.points - 1;
    }
  }

}
