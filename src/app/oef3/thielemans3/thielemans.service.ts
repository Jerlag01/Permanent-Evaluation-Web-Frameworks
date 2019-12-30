import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ThielemansService {

  public name: string;

  Countries : string[] = [
    "BE",
    "NL",
    "US",
    "DE",
    "FR",
    "RU"
  ]

  constructor(private http : HttpClient) { }

  getAgify(name){
      return this.http.get<IAgify>("https://api.agify.io/?name=" + name)
  }
  
}

export interface IAgify{
  name:string;
  age:number;
  count:string;
}
