import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bogaerts',
  templateUrl: './bogaerts.component.html',
  styleUrls: ['./bogaerts.component.css']
})
export class BogaertsComponent implements OnInit {

  percentage: number = 0;
  dateArray: Date[] = [];
  currencyData: number = 0;
  toggle: boolean;

  constructor() { }

  ngOnInit() {

    this.percentage = Math.random();
    this.currencyData = Math.random() * 100;
    for (let i = 0; i < 9; i++) {
      this.dateArray.push(this.randomDate(new Date(0), new Date()))
    }
  }

  getCurrency(){
    return this.toggle ? this.currencyData * 0.9 : this.currencyData
  }

  getCurrencyType(){
    return this.toggle ? "EUR" : ""
  }

  toggleCurrency(){
    this.toggle = !this.toggle;
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
