import { Component, OnInit } from '@angular/core';
import { VandereyckenService } from './vandereycken.service'
import { IWinner } from './vandereycken.service';

@Component({
  selector: 'app-vandereycken3',
  templateUrl: './vandereycken3.component.html',
  styleUrls: ['./vandereycken3.component.css']
})
export class Vandereycken3Component implements OnInit {

  year : string;
  winner:IWinner;

  years = [
    {year: "2008"}, 
    {year: "2009"}, 
    {year: "2010"}, 
    {year: "2011"}, 
    {year: "2012"}, 
    {year: "2013"}, 
    {year: "2014"}, 
    {year: "2015"}, 
    {year: "2016"}, 
    {year: "2017"}, 
    {year: "2018"}, 
    {year: "2019"}
  ];

  selectedYear : string;

  searchYear() {
    this.selectedYear;
    this.showData();
   }

  showData() {
    this.service.getWinner(this.year).subscribe(result => {
      this.winner = result;
    })
  }

  constructor(private service: VandereyckenService) {
  }

  ngOnInit() {
  }

}
