import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verschooten2',
  templateUrl: './verschooten2.component.html',
  styleUrls: ['./verschooten2.component.css']
})
export class Verschooten2Component implements OnInit {

  counter: number=0;
  values = '';
  constructor() { 
    setInterval(this.Addnumber, 200);
  }

  ngOnInit() {
  }
  showSite: boolean = false;
  title = 'Pokemon';
  pokemon = ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu'];
  myPokemon = this.pokemon[0];

  Addnumber = () =>{
    this.counter += 1;
  }
  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }
  ShowEvent(){
    this.showSite = true;
  }

}
