import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
  land: string;
  number: number;
}

@Component({
  selector: 'app-quinten-schutyser2',
  templateUrl: './quinten-schutyser2.component.html',
  styleUrls: ['./quinten-schutyser2.component.css']
})

export class QuintenSchutyser2Component implements OnInit {

  UserFirstName: string;
  UserLastName: string;
  Cities: City[];
  selectedCity: string;

  WanneGo: City[] = [];

  ShowPage1: boolean = true;
  ShowPage2: boolean = false;
  ShowPage3: boolean = false;

  input1: boolean = true;
  input2: boolean = true;

  constructor() {
    this.Cities = [
      { name: 'New York', code: 'NY', land: 'US', number: 1 },
      { name: 'Brussel', code: 'BRS', land: 'BE', number: 2 },
      { name: 'Amsterdam', code: 'AMS', land: 'NED', number: 3 },
      { name: 'Rome', code: 'RM', land: 'IT', number: 4 },
      { name: 'London', code: 'LDN', land: 'ENG', number: 5 },
      { name: 'Istanbul', code: 'IST', land: 'TUR', number: 6 },
      { name: 'Paris', code: 'PRS', land: 'FR', number: 7 }
    ];
  }
  ngOnInit() {
  }

  NextPage = () => {
    console.log("test");
    this.ShowPage2 = true;
    this.ShowPage1 = false;
  }
  NextPage2 = () => {
    this.ShowPage2 = false;
    this.ShowPage3 = true;
  }
  BackPageFromP2 = () => {
    this.ShowPage2 = true;
    this.ShowPage3 = false;
  }

  AddToListWanneGo = (tempCity: City) => {
    if (this.WanneGo.length == 0) {
      tempCity.number = 0;
      this.WanneGo.push(tempCity);
    }
    else {
      tempCity.number = this.WanneGo.length;
      this.WanneGo.push(tempCity);
    }
  }

  RemoveFromListWanneGo = (tempCity: City) => {
    this.WanneGo.splice(this.WanneGo.findIndex(x => x.number === tempCity.number), 1);
  }

  onFocusoutFirstName = (tempString: any) => {
    if (!(tempString.target.value === ""))
      this.input1 = false;
    else
      this.input1 = true;
  }
  onFocusoutLastName = (tempString: any) => {
    if (!(tempString.target.value === ""))
      this.input2 = false;
      else
      this.input2 = true;
  }
}