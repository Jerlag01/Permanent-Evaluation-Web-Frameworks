import { Component, OnInit } from '@angular/core';
import { DeoliveiraandrezoService, IWeerinterface } from './deoliveiraandrezo.service';

@Component({
  selector: 'app-deoliveiraandrezo3',
  templateUrl: './deoliveiraandrezo3.component.html',
  styleUrls: ['./deoliveiraandrezo3.component.css']
})
export class Deoliveiraandrezo3Component implements OnInit {

  display:IWeergave;
  searchcity:string="Antwerp";
  showstats:boolean=true;

  constructor(private service: DeoliveiraandrezoService) {
    this.service.GetData(this.searchcity).subscribe((result)=>{
      this.display={
      temp : result.main.temp-273.15,
      description:result.weather[0].description,
      city : result.name
    }
  });
  }

  Search(){
    
    this.service.GetData(this.searchcity).subscribe((result)=>{
      this.display={
      temp : result.main.temp-273.15,
      description:result.weather[0].description,
      city : result.name
    }
  });

  }
  ngOnInit() {
  }

}

export interface IWeergave {
  city:string;
  temp:number;
  description:string;
}
