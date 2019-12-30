import { CranshoffService, IWeather } from './cranshoff.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cranshoff3',
  templateUrl: './cranshoff3.component.html',
  styleUrls: ['./cranshoff3.component.css']
})
export class Cranshoff3Component implements OnInit {

  wheater : IWeather;
  city:string;
  constructor(private WeatherSvc : CranshoffService) {
    this.WeatherSvc.City = this.city;
  }

  getWeather(){
    this.WeatherSvc.City = this.city;
    this.WeatherSvc.getWeatherInCity().subscribe(result =>{
      this.wheater = result;
      console.log("city: "+this.wheater.location.name);
      console.log("temp: "+this.wheater.current.temperature);
    })
  }
  
  ngOnInit() {
    console.log("onInit start user"); 
  }



}
