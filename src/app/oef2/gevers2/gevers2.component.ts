import { Component, OnInit } from '@angular/core';
import {Gerecht} from "./HetGerecht";
import * as _ from "lodash";



@Component({
  selector: 'app-gevers2',
  templateUrl: './gevers2.component.html',
  styleUrls: ['./gevers2.component.css']
})
export class Gevers2Component implements OnInit {

  uur : number;
  minuur = 1;
  maxuur = 5;

  dishe: Gerecht[]=[];
  
  foto:string = "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwio76Ls3vnlAhUmMewKHcMuDCwQjRx6BAgBEAQ&url=https%3A%2F%2Fbe.indeed.com%2Fcmp%2FMakro%2Fabout&psig=AOvVaw2rCdnsfTB2q73SmViJ6Rhp&ust=1574371991631638";
  
  constructor() { 
    setInterval(this.Newuur, 2000)

    this.dishe.push(new Gerecht("pasta pesto", "basilicum", "olie", "parmasaan", "pijnboom pitten"));
    this.dishe.push(new Gerecht("pizza magaritta", "basilicum", "olie", "parmasaan", "mozerla", "tomaten saus", "deeg"));
    this.dishe.push(new Gerecht("bb", "basilicum", "olie", "parmasaan", "mozerla", "tomaten saus", "deeg"));    
  }

  Newuur = () => {
    this.uur = _.random(this.minuur, this.maxuur);
    console.log(this.uur);
}
  ngOnInit() {
  }

}
