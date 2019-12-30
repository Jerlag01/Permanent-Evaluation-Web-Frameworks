import { Component, OnInit } from '@angular/core';
import { CranshoffService, IWeather } from '../cranshoff.service';




@Component({
  selector: 'app-cranshoff-child',
  templateUrl: './cranshoff-child.component.html',
  styleUrls: ['./cranshoff-child.component.css']
})
export class CranshoffChildComponent implements OnInit {

  wheater : IWeather;
  showing : boolean = false;
  constructor(private WeatherSvc : CranshoffService) { 

  }

  ngOnInit() {
   
  }

  getWindspeed(){
    this.showing = true;
    this.WeatherSvc.getWeatherInCity().subscribe(result =>{
      this.wheater = result;
      console.log("city-child : "+this.wheater.location.name);
      console.log("windspeed: "+this.wheater.current.wind_speed);
      console.log("wind degree: "+this.wheater.current.wind_degree);
    })
  }

}
