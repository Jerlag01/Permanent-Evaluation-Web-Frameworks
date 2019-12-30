import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Offense} from './offenseInterfaces';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HumbletService {

  constructor(private client: HttpClient) { 
  }
    getAllOffenses(){
      return this.client.get<Offense[]>("https://datasets7.antwerpen.be/politie/overtredingen.json").pipe(
        map((data:Offense[])=>{
          data.forEach(element => {
            element.datum_vaststellingDate = moment(element.datum_vaststelling,'DD/MM/YYYY').toDate();
          });
          return data;
        })
    );
  }
}
