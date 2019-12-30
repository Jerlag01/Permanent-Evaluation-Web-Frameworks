import { Component, OnInit, Input } from '@angular/core';
import { LagaetService, User } from './lagaet.service';
import { Subscription } from "rxjs";
import { IChuckNorrisJoke, VerhaegenService } from '../verhaegen3/verhaegen.service';

@Component({
  selector: 'app-lagaet3',
  templateUrl: './lagaet3.component.html',
  styleUrls: ['./lagaet3.component.css']
})
export class Lagaet3Component implements OnInit {

  detail: User[] = [];
  search: string;
  selector: number = 0;
  subscription: Subscription;
  ready = false;
  SteamAPIKey: string="762AC123E195B6AA8E3C52F07C01F1DE";
  SteamID: string="";
  @Input() Joke : IChuckNorrisJoke;

  constructor(private LagaetService: LagaetService, private JokeService: VerhaegenService) { }

  async ngOnInit() {
    this.getRandomJoke();
  }
  
  async getRandomJoke(){
      this.Joke = await this.JokeService.getRandomJoke();
  }

  async GetSteamId() {
    this.SteamID = this.LagaetService.SteamID;
    this.LagaetService.getUserInfo(this.SteamAPIKey, this.SteamID)
    .subscribe(data => {
      this.detail = data;
      this.ready = true;
    });
  }

}
