import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import {Http, Response} from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class DupontbService {
  ratesData : any[];
  constructor(private client: HttpClient,  public http: Http) {}

   log:string = 'dupontlog';
  sendText() {
    
   
    
    
   
    this.http.request("https://api.exchangeratesapi.io/latest?base=EUR"
     
    ).subscribe((res : Response)=> {
        
        
         this.ratesData = res.json().rates
    });

    return this.ratesData;

    
  }

}
