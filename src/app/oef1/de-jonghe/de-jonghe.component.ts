import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-jonghe',
  templateUrl: './de-jonghe.component.html',
  styleUrls: ['./de-jonghe.component.css']
})
export class DeJongheComponent implements OnInit {

  gerechten: { id: number, naam: string, prijs: number }[] = [
    { "id": 0, "naam": "boegt", "prijs": 5 },
    { "id": 1, "naam": "brol", "prijs": 8 },
    { "id": 3, "naam": "zever", "prijs": 2 },
    { "id": 4, "naam": "iet", "prijs": 1 },
];
  
  constructor() { }

  ngOnInit() {
  }

}

class Gerecht {
  naam: string;
  prijs: number;

  constructor(gerecht: string, kostprijs: number) {
    this.naam = gerecht;
    this.prijs = kostprijs;
  }
}

