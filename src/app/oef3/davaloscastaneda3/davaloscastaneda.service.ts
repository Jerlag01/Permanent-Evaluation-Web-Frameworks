import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DavaloscastanedaService {

  pokelink: string = `https://pokeapi.co/api/v2/pokemon/`
  bulbasaur: string = `https://pokeapi.co/api/v2/pokemon/bulbasaur`
  charmander: string = `https://pokeapi.co/api/v2/pokemon/charmander`


  constructor(private client: HttpClient) {}

  Pokemons(){
    return this.client.get<RootObject>(this.pokelink);
  } 
  Pokemons2(pokemon:string){
    return this.client.get<IRootObject2>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  } 
}

export interface Result {
  name: string;
  url: string;
}

export interface RootObject {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

  export interface Sprites {
      front_default: string;
  }


  export interface IRootObject2 {
      base_experience: number;
      height: number;
      held_items: any[];
      id: number;
      is_default: boolean;
      location_area_encounters: string;
      name: string;
      order: number;
      sprites: Sprites;
      weight: number;
  }



