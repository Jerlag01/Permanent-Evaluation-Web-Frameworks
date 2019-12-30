import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-verhaegen',
  templateUrl: './verhaegen.component.html',
  styleUrls: ['./verhaegen.component.css']
})
export class VerhaegenComponent implements OnInit {

  naam: string;
  PI: string;

  naDeKomma: number;
  get NaDeKomma() {
    return this.naDeKomma;
  }
  set NaDeKomma(value: number) {
    if (!(value < 0)) {
      this.naDeKomma = value;
    }
    this.roundPI(this.naDeKomma);
  }

  birthDate: Date;
  set BirthDate(value: Date) {
    this.birthDate = value;
    this.daysBorn = this.getBirthdateDifference(value);
  }

  daysBorn: number;

  isTextRed : boolean;

  constructor() { 
    this.naam = 'olivier verhaegen';
    this.naDeKomma = 0;
    this.roundPI(this.naDeKomma);
    this.isTextRed = false;
  }

  ngOnInit() {
  }

  roundPI(getallenNaDeKomma: number) : void {
    this.PI = Math.PI.toFixed(getallenNaDeKomma);
  }

  getBirthdateDifference(birthDate: Date) : number {
    const date = new Date();
    const timeDiff = new Date(birthDate).getTime() - date.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  makeTextRed() : void {
    this.isTextRed = true;
  }

}
