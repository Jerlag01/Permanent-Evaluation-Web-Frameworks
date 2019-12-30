import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pauwels',
  templateUrl: './pauwels.component.html',
  styleUrls: ['./pauwels.component.css']
})
export class PauwelsComponent implements OnInit {

  name : string = "Aäron Pauwels";
  datum : Date = new Date();
  bedrag : number = 73.99;

  constructor() { }

  ngOnInit() {
  }

}
