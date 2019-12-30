import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thielemans',
  templateUrl: './thielemans.component.html',
  styleUrls: ['./thielemans.component.css']
})


export class ThielemansComponent implements OnInit {

  name: string = "Robin Thielemans";
  datum: Date;
  city : string = "Antwerpen";
  citytime = 0;


  constructor() {
      this.datum = new Date()
   }

   randomCity(){
      let city : Array<string> = ["Antwerpen" ,"New York",  "Tokyo", "San Francisco","Shanghai","Singapore","Seoul","Paris","London","Moscow"];
      let citytime : Array<number> = [0,-6,8,-9,7,7,8,0,-1,2];
      let rand = Math.floor((Math.random() * city.length))
      this.city = city[rand]
      this.citytime = citytime[rand]
      this.datum = new Date()
      this.datum.setHours(this.datum.getHours()+this.citytime);
    }

  ngOnInit() {
  }

}
