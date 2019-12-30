import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGame} from '../baert3/bggInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaertService {

  constructor(private _http: HttpClient) { }

  get Collection() : Observable<IGame[]> {
    return this._http.get<IGame[]>("https://bgg-json.azurewebsites.net/collection/baertj");
  }
  
}
