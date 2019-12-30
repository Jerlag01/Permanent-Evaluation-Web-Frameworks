import { Component, OnInit } from '@angular/core';
import {MonstersInfo, Monster} from '../ruysint'
import { RuysService} from '../ruys.service';
import * as _ from 'lodash';
import { Ruys3Component } from '../ruys3.component';

@Component({
  selector: 'app-ruys-child',
  templateUrl: './ruys-child.component.html',
  styleUrls: ['./ruys-child.component.css']
})
export class RuysChildComponent implements OnInit {

  constructor(private ruys3component: Ruys3Component) { }
  private _search: string = "";
  ngOnInit() {
  }
  monsterinfo: MonstersInfo;
  

  get Search() {
    return this._search;
  }
  set Search(value: string) {
    this._search = value;
    if(this._search != "") {
     this.ruys3component.setFields(this._search)
      };
    }
  }

