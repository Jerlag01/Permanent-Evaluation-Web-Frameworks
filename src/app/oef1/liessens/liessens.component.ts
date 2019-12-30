import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liessens',
  templateUrl: './liessens.component.html',
  styleUrls: ['./liessens.component.css']
})
export class LiessensComponent implements OnInit {
  name: string = "Davino Liessens";
  birthday = new Date(1999, 4, 8);
  percentage: number = 0.2473;

  constructor() { }

  ngOnInit() {
  }

}