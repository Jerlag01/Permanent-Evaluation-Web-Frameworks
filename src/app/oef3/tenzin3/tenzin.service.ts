import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Iplanets,Ispecies,Istarships,Ivehicles,Ipeople,Ifilm} from "./interfaceApi"

@Injectable({
  providedIn: 'root'
})
export class TenzinService {

  randomwaarde:number;
  
  constructor(private _http: HttpClient) {
   
   }

   intRandom(maxwaarde:number){
   return this.randomwaarde = Math.floor(Math.random() * maxwaarde) + 1 ; 
   }

  
  get Films(){
    this.intRandom(7);
    console.log(this.randomwaarde);
    return this._http.get<Ifilm>(`https://swapi.co/api/films/${this.randomwaarde}`);
    
  }
  get People(){
    this.intRandom(10);
    return this._http.get<Ipeople>(`https://swapi.co/api/people/${this.randomwaarde}`);
  }
  get Starships(){
    this.intRandom(10);
    return this._http.get<Istarships>(`https://swapi.co/api/starships/${this.randomwaarde}`);
  }
  get Species(){
    this.intRandom(10);
    return this._http.get<Ispecies>(`https://swapi.co/api/species/${this.randomwaarde}`);
}
  get Vehicles(){
    this.intRandom(10);
    return this._http.get<Ivehicles>(`https://swapi.co/api/vehicles/${this.randomwaarde}`);
  }
  get Planets(){
    this.intRandom(10);
    return this._http.get<Iplanets>(`https://swapi.co/api/planets/${this.randomwaarde}`);
  }

}
