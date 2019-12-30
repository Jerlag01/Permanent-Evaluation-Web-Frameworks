import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-duville',
  templateUrl: './duville.component.html',
  styleUrls: ['./duville.component.css']
})
export class DuvilleComponent implements OnInit {

  
  constructor() {
    setInterval(() => this.nu = moment(), 1000);
  }

  naam: string = "Lars Duville";
  nu = moment();
  tijdCounter = moment().startOf("seconds");

  

  aantalKlik: number = 0;
  klikTeller() {
    this.aantalKlik += 1;
    
  }
  
  ngOnInit() {
  }

  
}
