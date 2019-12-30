import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wauters',
  templateUrl: './wauters.component.html',
  styleUrls: ['./wauters.component.css']
})
export class WautersComponent implements OnInit {

  voornaam: string = "Maxim";
  achternaam: string = "Wauters";
  cnt: number = 0;
  condition: boolean = false;

  constructor() {
    setInterval(() => { this.cnt++; }, 100);
   }

   Activate()
   {
     this.condition = true;
     console.log("checky");
   }

  ngOnInit() {
  }

}
