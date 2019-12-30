import { Component, OnInit } from '@angular/core';
import { DupontbService } from './dupontb.service';
import { CranshoffService } from '../cranshoff3/cranshoff.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dupontb3',
  templateUrl: './dupontb3.component.html',
  styleUrls: ['./dupontb3.component.css']
})
export class Dupontb3Component implements OnInit {
  
  currency : {
    item : string,
    value :string
  }[]= [];
  
  ratesData: any[]; 
  constructor(private dupontbService: DupontbService, private weatherService: CranshoffService) { }

  ngOnInit() {
  }

  append(number :string){

   this.ratesData = this.dupontbService.sendText();

   console.log(this.ratesData)

   for (const item in this.ratesData) {
     if (this.ratesData.hasOwnProperty(item)) {
       const element : string = this.ratesData[item];
      
      
       
        this.currency.push({
          item : item,
          value : element

        });
   
      
       
      
       



       console.log(item);
       console.log(element);
       
     }
   }
   
    
    
  }

  



}
