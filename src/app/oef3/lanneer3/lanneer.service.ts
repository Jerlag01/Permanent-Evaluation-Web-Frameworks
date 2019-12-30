import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tentoonstellingen } from './InterfaceTentoonstellingen';

@Injectable({
  providedIn: 'root'
})
export class LanneerService {

  constructor(private http: HttpClient) { }

  getAlleTentoonstellingen(){
    return this.http.get<Tentoonstellingen[]>("https://datasets7.antwerpen.be/adlib/rubenianumtentoonstellingen.json");
  }
}