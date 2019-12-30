import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-baert',
  templateUrl: './baert.component.html',
  styleUrls: ['./baert.component.css']
})
export class BaertComponent implements OnInit {
  pageOwner: string='Jonas Baert';
  pageTitle: string='Boodschappenlijst';
  currentDate: Date;
  boodschappenLijst: string[];
  prijs: Number[];

  constructor() {
    this.currentDate = new Date();
    this.boodschappenLijst = ['La Chouffe', 'roos vleesje', 'stoofvlees','speculaaspasta','spaghetti'];
    this.prijs = [0,0,0,0,0];
    this.updatePrice();
    }

  public updatePrice = () => {
    for (let item in this.boodschappenLijst) {
      this.prijs[item] = _.random(10,50);
    }
  }

  ngOnInit() {
  }

}


