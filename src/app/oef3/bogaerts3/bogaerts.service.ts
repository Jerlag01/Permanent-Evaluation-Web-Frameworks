import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Launch} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class BogaertsService {

  constructor(private client: HttpClient) { }

  getUpcomingLaunches(){
    return this.client.get<Launch[]>("https://api.spacexdata.com/v3/launches/upcoming");
  }

  getPastLaunches(){
    console.log("getpast launches");
    
    return this.client.get<Launch[]>("https://api.spacexdata.com/v3/launches/past");
  }

  getAllLaunches(){
    return this.client.get<Launch[]>("https://api.spacexdata.com/v3/launches");
  }
  
  getLatestLaunch(){
    return this.client.get<Launch>("https://api.spacexdata.com/v3/launches/latest");
  }
  
  getNextLaunch(){
    return this.client.get<Launch>("https://api.spacexdata.com/v3/launches/next");
  }
  
  getOneLaunch(flight_number: number){
    return this.client.get<Launch>(`https://api.spacexdata.com/v3/launches/${flight_number}`);
  }
}
