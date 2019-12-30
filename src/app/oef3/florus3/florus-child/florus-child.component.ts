import { Component, OnInit, Input } from '@angular/core';
import { FlorusService } from '../florus.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-florus-child',
  templateUrl: './florus-child.component.html',
  styleUrls: ['./florus-child.component.css']
})
export class FlorusChildComponent implements OnInit {

  @Input() id;
  @Input() quotes;
  @Input() characterChoise = "Walter White";
  @Input() foutMelding;
  constructor(private florusService: FlorusService) { }

  ngOnInit() {
    this.getRandomId();
    return this.florusService.getQuotes().subscribe(quote =>{
      this.quotes = quote;
    })
  }

  
  getRandomId(){
    this.id = _.random(1,84);
    while(this.id <= 62 && this.id >=30){
      this.id = _.random(1,84);
    }
}

  getRandomQuote(value: string) {
    console.log(value);
    if(this.characterChoise == value){
      this.getRandomId();
      this.foutMelding = false;
      }
    else{
      this.foutMelding = true;
      }

  }
}
