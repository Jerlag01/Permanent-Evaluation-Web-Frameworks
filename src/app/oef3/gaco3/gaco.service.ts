import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GacoService {

  
  constructor(private _http: HttpClient) {
   }
answer(){
  return this._http.get<yesnoanswer>(`https://yesno.wtf/api`)
  }

RandomYesOrNo(){}

}
export interface yesnoanswer{
  answer: string;
  image: string;
}