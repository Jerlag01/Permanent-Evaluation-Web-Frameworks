import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VanginderenService {

  constructor(private client : HttpClient) { }
  /*
  https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/cnarenal/?period=latestdata
  */
 GetWeatherData(){
   return this.client.get("https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/cnarenal/?period=latestdata");

 }
 GetWeatherData_local(){
  return {
    TEMPERATURE : 12,
    WEATHER_DES: "windy",
    HUMIDITY: 63

  }
 }
}

export interface IVanginderenService{
  TEMPERATURE: number,
  WEATHER_DES: string,
  HUMIDITY: number
}
