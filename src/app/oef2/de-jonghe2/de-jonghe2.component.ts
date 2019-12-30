import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-jonghe2',
  templateUrl: './de-jonghe2.component.html',
  styleUrls: ['./de-jonghe2.component.css']
})
export class DeJonghe2Component implements OnInit {

  gerechten: { naam: string, prijs: number }[] = [
    { "naam": "boegt", "prijs": 5 },
    { "naam": "brol", "prijs": 8 },
    { "naam": "zever", "prijs": 2 },
    { "naam": "iet", "prijs": 1 },
];

  isShow = true;

  toggleForm() {
    this.isShow = !this.isShow;
  }

  addDish(gerechtNaam : string, gerechtPrijs : number){
    // console.log("wauw dish added");
    // console.log(gerechtNaam);
    // console.log(gerechtPrijs);

    this.gerechten.push({naam : gerechtNaam, prijs : gerechtPrijs})
    
  }
  
  constructor() { }

  ngOnInit() {
  }

}