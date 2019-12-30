import { Component, OnInit, Input } from '@angular/core';
import { VanginderenService, IVanginderenService } from './vanginderen.service';



@Component({
  selector: 'app-vanginderen3',
  templateUrl: './vanginderen3.component.html',
  styleUrls: ['./vanginderen3.component.css']
})
export class Vanginderen3Component implements OnInit {

  //data: IVanginderenService;
  data;
 @Input('master') naam: string;
 isvisible: boolean;
 
  constructor(private service: VanginderenService) { 
    this.data = service.GetWeatherData().subscribe(result =>{this.data = result});
    this.isvisible = true; //debug
    //this.data = service.GetWeatherData_local(new Date);
  }

  clicked = () =>{
    if(this.naam == null){
      this.naam = "Henk de potvis";
      return;
    }else{
      this.naam = null;
      return;
    }
//toggles the string test into the naam variable function to activate on @input
  }

  ngOnInit() {
    this.master = "to set";
  }
  master = this.naam;
}
