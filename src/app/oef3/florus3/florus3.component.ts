import { Component, OnInit } from '@angular/core';
import {Quotes} from "./florusInterface3"
import * as _ from 'lodash';
import { BaertService } from '../baert3/baert.service'
import { IGame } from '../baert3/bggInterface';

@Component({
  selector: 'app-florus3',
  templateUrl: './florus3.component.html',
  styleUrls: ['./florus3.component.css']
})
export class Florus3Component implements OnInit {

  quotes: Quotes[]= [];
  id: number = 0;
  characterChoise: string;
  foutMelding: boolean = false;
  spelId = 882;
  game: IGame[];
  
  constructor(private beartService: BaertService) { }

  ngOnInit() {
    this.beartService.Collection.subscribe(Game =>{
      this.game = Game
      })
    
  }


}
