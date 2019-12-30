import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanneer',
  templateUrl: './lanneer.component.html',
  styleUrls: ['./lanneer.component.css']
})
export class LanneerComponent implements OnInit {

  voorNaam: string = 'Pieter-Jan';
  achterNaam: string = 'Lanneer';
  geboorteDatum: Date = new Date('1998/01/26');
  randomInt: number;
  uitkomstStr: string = '';
  keuze: number;
  verloren: number = 0;
  gewonnen: number = 0;


  constructor() { }

  schaarSteenPapier(keuze: number)
  {
    this.randomInt = Math.floor(Math.random() * 3);
    this.keuze = keuze;

    if (this.keuze === this.randomInt)
    {
        this.uitkomstStr = 'gelijk';
    }

    if ((this.keuze + 1 === this.randomInt && this.keuze < 2) || (this.keuze === 2 && this.randomInt === 0))
    {
      this.uitkomstStr = 'verloren';
      this.verloren++;
    }

    if ((this.keuze - 1 === this.randomInt && this.keuze > 0) || (this.keuze === 0 && this.randomInt === 2))
    {
      this.uitkomstStr = 'gewonnen';
      this.gewonnen++;
    }
  }

  keuzeToString(temp: number)
  {
      switch (temp) {
      case 0:
        return 'schaar';
      case 1:
        return 'steen';
      case 2:
        return 'papier';
    }
  }

  ngOnInit() {
  }

}
