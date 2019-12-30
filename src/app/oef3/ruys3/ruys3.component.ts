import { Component, OnInit } from '@angular/core';
import {MonstersInfo, Monster} from './ruysint'
import { RuysService} from './ruys.service';
import * as _ from 'lodash';
import { IDonaldQuote, SentenService } from '../senten3/senten.service';
import { VanginderenService } from '../vanginderen3/vanginderen.service';
import { Launch } from '../bogaerts3/interfaces';
import { BogaertsService } from '../bogaerts3/bogaerts.service';

@Component({
  selector: 'app-ruys3',
  templateUrl: './ruys3.component.html',
  styleUrls: ['./ruys3.component.css']
})
export class Ruys3Component implements OnInit {

  constructor(private RuysService: RuysService, private BogaertsService: BogaertsService) { }
  monster: Monster;
  spaceX: Launch;
  monsterinfo: MonstersInfo;
  
  ngOnInit() {
  this.BogaertsService.getNextLaunch().subscribe(data=>{
    this.spaceX = data;
  });
  }


setFields(value: string){
    this.RuysService.getMonster(value).subscribe(data=>{
      this.monsterinfo = data;
      
    
    });
}


 
}
