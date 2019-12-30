import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
@Component({
  selector: 'app-de-oliveira',
  templateUrl: './de-oliveira.component.html',
  styleUrls: ['./de-oliveira.component.css']
})
export class DeOliveiraComponent implements OnInit {

  opstarttijd;
  datum;
  
  randomgetal:number;
  
    constructor() { 
      this.randomgetal=0;
      this.datum=moment();
      this.opstarttijd=moment().format('LLLL');
      setInterval(this.UpdateTime,1000);
    }
  
    ngOnInit() {
    }
    
    RandomGen = (get1:number,get2:number) =>{
      this.randomgetal=_.random(get1,get2);
    }
  
    UpdateTime = () =>{
      this.datum=moment();
    }

}
