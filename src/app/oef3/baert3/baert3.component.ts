import { Component, OnInit, Input } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

import { BaertService } from './baert.service';
import { IGame } from './bggInterface';
import { BogaertsService } from '../bogaerts3/bogaerts.service';
import { Launch } from '../bogaerts3/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-baert3',
  templateUrl: './baert3.component.html',
  styleUrls: ['./baert3.component.css']
})
export class Baert3Component implements OnInit {
  
  collection : IGame[];
  firstLetter: string = "A";
  players: number = 2;

  lanceringen: Launch[] = [];
  subscription: Subscription;
  volgendelancering: Launch;

  constructor(private service: BaertService, private service2: BogaertsService) {
  }

  ngOnInit() {
    this.service.Collection.subscribe(collection => this.collection = collection);
    this.subscription = this.service2.getUpcomingLaunches().subscribe(data=>{
      this.lanceringen = data;
    });
  }
}
