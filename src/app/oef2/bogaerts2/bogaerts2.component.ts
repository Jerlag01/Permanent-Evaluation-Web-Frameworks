import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/compiler/src/core';

@Component({
  selector: 'app-bogaerts2',
  templateUrl: './bogaerts2.component.html',
  styleUrls: ['./bogaerts2.component.css']
})
export class Bogaerts2Component implements OnInit {

  namenLijst: KleurNaam[] = [];
  isNameEmpty: boolean;
  errorColor: string;
  errorSize: string;

  constructor() { }

  ngOnInit() {
  }

  addName(inputBox){
    if(inputBox.value.length == 0){
      this.isNameEmpty = true
      this.errorColor = this.genErrorColor();
      this.errorSize = this.genSize();
    }
    else{
      this.namenLijst.push(new KleurNaam(inputBox.value));
      inputBox.value = ""
    }    
  }

  onkeyDown(event: KeyboardEvent){
    if(event.code == "Enter")
      this.addName(event.target)
    else
      this.isNameEmpty = false;
  }

  private genErrorColor(): string{
    return '#' + (Math.floor(Math.random() * (255 - 45)) + 45).toString(16) + "0000"
  }

  private genSize(): string{
    return Math.floor(Math.random() * (34 - 8)) + 8 + "px"
  }

}

class KleurNaam{
  naam: string;
  kleur: string;

  constructor(naam: string){
    this.naam = naam;
    this.kleur = this.genRandomKleur();
  }

  private genRandomKleur(): string{
    //16777215 == ffffff in decimal
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
}
