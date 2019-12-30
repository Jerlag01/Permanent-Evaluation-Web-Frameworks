import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SentenService {

  constructor(private client: HttpClient) { }
  getQuote():Promise<IDonaldQuote> {    
    return this.client.get<IDonaldQuote>("https://api.tronalddump.io/random/quote").toPromise();
  } 
  getMeme():Observable<Blob> {    
    return this.client.get("https://api.tronalddump.io/random/meme", { responseType: 'blob' });
  } 
}

export interface IDonaldQuote {
  appeared_at: string;
  created_at: string;
  quote_id:string;
  tags:string;
  updated_at: string;
  value: string;
}
