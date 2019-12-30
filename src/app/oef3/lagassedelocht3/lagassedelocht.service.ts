import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LagassedelochtService {
  carBrand: string = 'Bugatti';
  carModel1: string = 'Chiron';
  carModel2: string = 'Veyron';
  carModel3: string = 'Type 57SC Atlantic';
  carModel4: string = 'Type 41 Royale';
  data1:string = '3.5M euro';
  data2:string = '2M euro';
  data3:string = '25M euro';
  data4:string = '50M euro';
  constructor(private _http: HttpClient) { }

  get test() : Observable<IGenre>
  {
    return this._http.get<IGenre>("https://binaryjazz.us/wp-json/genrenator/v1/genre/");
  }
}
export interface IGenre
{
  Music_genre:string;
}
