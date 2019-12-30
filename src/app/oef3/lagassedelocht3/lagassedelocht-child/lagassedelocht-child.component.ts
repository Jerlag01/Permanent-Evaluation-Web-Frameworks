import { Component, OnInit, Input } from '@angular/core';
import { LagassedelochtService, IGenre } from '../lagassedelocht.service';
import { SchutyserService, IMoney } from '../../schutyser3/schutyser.service';

@Component({
  selector: 'app-lagassedelocht-child',
  templateUrl: './lagassedelocht-child.component.html',
  styleUrls: ['./lagassedelocht-child.component.css']
})
export class LagassedelochtChildComponent implements OnInit {
  @Input() inputModel1: string;
  @Input() inputModel2: string;
  @Input() inputModel3: string;
  @Input() inputModel4: string;
  data1:string;
  data2:string;
  data3:string;
  data4:string;
  newGenre:IGenre;
  tempMoney:IMoney;
  course:number;
  
  constructor(private service1: LagassedelochtService,private service2: SchutyserService) {
    this.data1 = service1.data1;
    this.data2 = service1.data2;
    this.data3 = service1.data3;
    this.data4 = service1.data4;
    
   }

  async ngOnInit() {
    this.service1.test.subscribe(d => this.newGenre = d);
    try { 
      this.tempMoney = await this.service2.getSpecifiekCurrency("EUR","CAD");  
      this.course = this.tempMoney.rates[Object.keys(this.tempMoney.rates)[0]];
      
    } catch(error){
      console.log("error")
    }
  }
}

