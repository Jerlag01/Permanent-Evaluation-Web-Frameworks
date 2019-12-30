import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LagaetService {

  public SteamAPIKey: string;
  public SteamID: string;
  
  constructor(private client: HttpClient) { }

  getUserInfo(SteamAPIKey, SteamID){
    return this.client.get<User[]>(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${SteamAPIKey}&steamids=${SteamID}`);
  }
}

export interface User {
  response: Response[];
}

export interface Response {
  players: Players[];
  length: number;
}

export interface Players {
  steamid: number;
  personaname: string;
  profileurl: string;
  avatar: string;
  avatarmedium:string;
  avatarfull: string;
  realname: string;
  loccountrycode: string;
}