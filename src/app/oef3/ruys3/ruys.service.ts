import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MonstersInfo, Monster} from './ruysint'

@Injectable({
  providedIn: 'root'
})
export class RuysService {

  constructor(private client: HttpClient) { }

  getMonster(value: string){
    return this.client.get<MonstersInfo>("http://www.dnd5eapi.co/api/monsters/"+value);
  }

  geturl(){
    return this.client.get<Monster>("http://www.dnd5eapi.co/api/monsters/");
  }
}
