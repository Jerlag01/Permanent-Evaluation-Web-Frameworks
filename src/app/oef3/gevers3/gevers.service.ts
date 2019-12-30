import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bier } from './interfaceBier';

@Injectable({
  providedIn: 'root'
})

export class GeversService {
  constructor(private client: HttpClient) { }

  getRandomBier(){
    return this.client.get<Bier[]>("https://api.punkapi.com/v2/beers/random")
  }

  getBierByName(id:number){
    return this.client.get<Bier[]>("https://api.punkapi.com/v2/beers/"+id)
  }

}
