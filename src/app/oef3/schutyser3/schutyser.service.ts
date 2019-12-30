import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ThrowStmt } from '@angular/compiler';
import { RotateStringPipe } from 'src/app/oef1/hattas/Pipes/rotate-string.pipe';

@Injectable({
  providedIn: 'root'
})

export class SchutyserService {

  PossibleCoins: IAllCoins[] = [
    {label:"EUR", Value:"EUR"}, 
    {label:"CAD", Value:"CAD"}, 
    {label:"HKD", Value:"HKD"}, 
    {label:"ISK", Value:"ISK"}, 
    {label:"PHP", Value:"PHP"}, 
    {label:"DKK", Value:"DKK"}, 
    {label:"HUF", Value:"HUF"}, 
    {label:"CZK", Value:"CZK"}, 
    {label:"AUD", Value:"AUD"}, 
    {label:"RON", Value:"RON"},
    {label:"SEK", Value:"SEK"},
    {label:"IDR", Value:"IDR"},
    {label:"INR", Value:"INR"},
    {label:"BRL", Value:"BRL"},
    {label:"RUB", Value:"RUB"},
    {label:"HRK", Value:"HRK"},
    {label:"JPY", Value:"JPY"},
    {label:"THB", Value:"THB"},
    {label:"CHF", Value:"CHF"},
    {label:"SGD", Value:"SGD"},
    {label:"PLN", Value:"PLN"},
    {label:"BGN", Value:"BGN"},
    {label:"TRY", Value:"TRY"},
    {label:"CNY", Value:"CNY"},
    {label:"NOK", Value:"NOK"}, 
    {label:"NZD", Value:"NZD"}, 
    {label:"ZAR", Value:"ZAR"}, 
    {label:"USD", Value:"USD"}, 
    {label:"MXN", Value:"MXN"}, 
    {label:"ILS", Value:"ILS"}, 
    {label:"GBP", Value:"GBP"},
    {label:"KRW", Value:"KRW"}, 
    {label:"MYR", Value:"MYR"}
  ];
  
  constructor(private client: HttpClient) { }

  //Base is de munt waarmee je het gaat vergelijken
  getAllCurrency (base :string) {    
    return this.client.get<IMoney>("https://api.exchangeratesapi.io/latest?base=" + base)
  } 
  //Base is de munt waarmee je het gaat vergelijken
  //Symbol is een specifieke munt waarmee je wilt gaan vergelijken. Dit MOETEN 3 letters zijn
  getSpecifiekCurrency(base: string,symbol:string){
    return this.client.get<IMoney>("https://api.exchangeratesapi.io/latest?base=" + base + "&symbols=" + symbol)
      .toPromise();
  }

  get possibleCoins(){     
    return this.PossibleCoins;
  }
}

export interface IAllCoins{
  label: string;
  Value: string;
}
export interface Rates {
    EUR: number;
    CAD: number;
    HKD: number;
    ISK: number;
    PHP: number;
    DKK: number;
    HUF: number;
    CZK: number;
    AUD: number;
    RON: number;
    SEK: number;
    IDR: number;
    INR: number;
    BRL: number;
    RUB: number;
    HRK: number;
    JPY: number;
    THB: number;
    CHF: number;
    SGD: number;
    PLN: number;
    BGN: number;
    TRY: number;
    CNY: number;
    NOK: number;
    NZD: number;
    ZAR: number;
    USD: number;
    MXN: number;
    ILS: number;
    GBP: number;
    KRW: number;
    MYR: number;
}
export interface IMoney {
  rates: Rates; //Wat is de koers van de andere munten
  base: string; //Wat is de huidige munt
  date: string; //Van wanneer zijn deze waardes
}
