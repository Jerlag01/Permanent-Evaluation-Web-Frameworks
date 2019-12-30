import { Component, OnInit } from '@angular/core';
import {TenzinService} from "./tenzin.service"
import {VanginderenService} from "../vanginderen3/vanginderen.service"
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-tenzin3',
  templateUrl: './tenzin3.component.html',
  styleUrls: ['./tenzin3.component.css']
})
export class Tenzin3Component implements OnInit {

  films:any ={
    created :"",
    title:"",
  }
  people:any ={
    name:"",
    birth_year:""
  }
  species:any={
    name:"",
    classification:""
  }
  starships:any={
    name:"",
    passengers:""
  }
  vehicles:any={
    name:"",
    cargo_capacity:""
  }
  planets:any={
    name:"",
    climate:"",
    diameter:""
  }

  //de result van de api tonen of niet
  resultfilms:boolean = false;
  resultpeople:boolean = false;
  resultspecies:boolean = false;
  resultstarships:boolean = false;
  resultvehicles:boolean = false;
  resultplanets:boolean = false;

  weathertenz: any;
  inputnumber: number = 0;
  soldiernumber: number = 0;
  

  constructor(private starwarsSvc: TenzinService,private weatherSvc: VanginderenService) {
}
  ngOnInit() {
    this.weathertenz = this.weatherSvc.GetWeatherData().subscribe(result =>{this.weathertenz = result});
     setInterval(()=>{this.soldiernumber = 10 + this.inputnumber},1000)
  }
  
  toonFilms(){
    this.starwarsSvc.Films.subscribe((result)=>{
      this.films ={
        created : result.created,
        title : result.title
      }
    });
    this.resultfilms = true;
    
    this.weatherSvc.GetWeatherData().subscribe((result)=>{
      this.weathertenz = result;
    })
  }
  toonPeople(){
    
    this.starwarsSvc.People.subscribe((result)=>{
      this.people ={
        name: result.name,
        birth_year: result.birth_year
      }
      
    });
    this.resultpeople = true;
  }
  toonSpecies(){
    this.starwarsSvc.Species.subscribe((result)=>{
      this.species ={
        name: result.name,
        classification : result.classification
      }
    });
    this.resultspecies = true;
  }
  toonStarships(){
    this.starwarsSvc.Starships.subscribe((result)=>{
      this.starships ={
        name: result.name,
        passengers: result.passengers
      }
    });
    this.resultstarships = true;
  }
  toonPlanets(){
    this.starwarsSvc.Planets.subscribe((result)=>{
      this.planets ={
        name: result.name,
        climate: result.climate,
        diameter: result.diameter
      }
    });
    this.resultplanets = true;
  }
  toonVehicles(){
    this.starwarsSvc.Vehicles.subscribe((result)=>{
      this.vehicles ={
        name: result.name,
        cargo_capacity: result.cargo_capacity
      }
    });
    this.resultvehicles = true;
  }
}
