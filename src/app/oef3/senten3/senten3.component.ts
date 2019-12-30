import { Component, OnInit } from '@angular/core';
import { VerhaegenService, IChuckNorrisJoke } from './../verhaegen3/verhaegen.service';
import { SentenService, IDonaldQuote } from './senten.service';

@Component({
  selector: 'app-senten3',
  templateUrl: './senten3.component.html',
  styleUrls: ['./senten3.component.css']
})
export class Senten3Component implements OnInit {
  ChuckNorrisGrap : IChuckNorrisJoke;

  constructor(private JokeService: VerhaegenService, private Service : SentenService) { 
    
  }

  ngOnInit() {
    
    this.getRandomJoke();
  }


  async getRandomJoke(){
      this.ChuckNorrisGrap = await this.JokeService.getRandomJoke()      
  }
}
