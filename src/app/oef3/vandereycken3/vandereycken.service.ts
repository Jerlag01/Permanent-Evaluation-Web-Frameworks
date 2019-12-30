import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VandereyckenService {

  public year: string;

  constructor(private http : HttpClient) { }

  getWinner(year){
      return this.http.get<IWinner>(`https://ergast.com/api/f1/${year}/2019/driverStandings/1.json`)
  }
}

export interface IWinner{
  givenName:string;
  familyName:string;
}
