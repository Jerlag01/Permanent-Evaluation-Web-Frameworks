import { Component, OnInit } from '@angular/core';
import { id } from 'date-fns/locale';

@Component({
  selector: 'app-lanneer2',
  templateUrl: './lanneer2.component.html',
  styleUrls: ['./lanneer2.component.css']
})
export class Lanneer2Component implements OnInit {

  pokemon = [{id: 1, name: 'Bulbasaur', link: 'e/e7/Spr_1g_001.png',
                HP: 24, Attack: 14, Defense: 14, Special: 16, Speed: 14},
             {id: 4, name: 'Charmander', link: '2/22/Spr_1g_004.png',
                HP: 23, Attack: 14, Defense: 13, Special: 14, Speed: 16},
             {id: 7, name: 'Squirtle', link: '2/21/Spr_1g_007.png',
                HP: 24, Attack: 14, Defense: 16, Special: 14, Speed: 13}];

  pokemonName: string = null;
  pokemonIndex: number = null;
  linkPrefix: string = 'https://archives.bulbagarden.net/media/upload/';
  showSpecs = false;
  showResults = false;

  constructor() { }

  ngOnInit() { 
    this.pokemonIndex = 0;
  }

  onHover(event) {

      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < this.pokemon.length; index++) {
        if (event.currentTarget.src === this.linkPrefix + this.pokemon[index].link) {
        this.pokemonName = this.pokemon[index].name;
        this.pokemonIndex = index;
      }
    }
      this.showSpecs =  true;
  }

  onClick(event){
    for (let index = 0; index < this.pokemon.length; index++) {
      if (event.currentTarget.src === this.linkPrefix + this.pokemon[index].link) {
      this.pokemonName = this.pokemon[index].name;
      this.pokemonIndex = index;
      }
    }
    this.showResults =  true;
  }

  checkInput(input){
    if (input === 'back') {
      this.showResults =  false;
    }
  }
}
