import { Component, OnInit, Input } from '@angular/core';
import { LagaetService } from '../lagaet.service';

@Component({
  selector: 'app-lagaet-child',
  templateUrl: './lagaet-child.component.html',
  styleUrls: ['./lagaet-child.component.css']
})

export class LagaetChildComponent implements OnInit {

  constructor( private LagaetService: LagaetService) { }
  
  steamId: string;

  ngOnInit() {
  }

  GetSteamId() {
    this.LagaetService.SteamID = this.steamId; 
  }

}
