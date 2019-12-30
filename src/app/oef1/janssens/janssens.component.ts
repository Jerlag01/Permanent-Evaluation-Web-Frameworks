import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-janssens',
  templateUrl: './janssens.component.html',
  styleUrls: ['./janssens.component.css']
})
export class JanssensComponent implements OnInit {

  verjaardag = new Date(1993, 9, 3)
  getal1 = _.random(0, 100);
  getal2 = _.random(0, 100);
  percentage = (this.getal2 / this.getal1);
  uppercase : string = "uppercase";
  lowercase : string = "LOWERCASE";

  constructor() { 
  }

  ngOnInit() {
  }

}
