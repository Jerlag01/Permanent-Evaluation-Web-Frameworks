import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Quotes} from './florusInterface3'

@Injectable({
  providedIn: 'root'
})
export class FlorusService {

  constructor(private client: HttpClient) { }

  getQuotes(){
    return this.client.get<Quotes[]>("https://breakingbadapi.com/api/quotes?series=breaking+bad");
  }
}
