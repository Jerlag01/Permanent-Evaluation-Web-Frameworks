import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo',
  templateUrl: './campo.component.html',
  styleUrls: ['./campo.component.css']
})
export class CampoComponent implements OnInit {
  random: any="1";
  arrayNumbers: any = {'1': 'één!', '2': 'twee!', '3': 'drie!', '4': 'vier!','5':'vijf!','6':'zes!','7':'zeven!','8':'acht!','9':'negen!','10':'tien!'};
  mijnBudget: number= 2;
  mijnNaam: string="milan";
  
  constructor() { }

  ngOnInit() {
    this.random = Object.keys(this.arrayNumbers)[Math.floor(Math.random() * Math.floor(10))]
  }


}
