import { Component, OnInit } from '@angular/core';
import { VerhaegenService, IChuckNorrisJoke } from './verhaegen.service';
import { BogaertsService } from '../bogaerts3/bogaerts.service';
import {Launch} from '../bogaerts3/interfaces';

@Component({
  selector: 'app-verhaegen3',
  templateUrl: './verhaegen3.component.html',
  styleUrls: ['./verhaegen3.component.css']
})
export class Verhaegen3Component implements OnInit {

  jokeCategories : Array<string>;
  nextRocketLaunch : Launch;

  constructor(
    private jokeService : VerhaegenService,
    private spaceXService : BogaertsService) { }

  async ngOnInit() {
    this.spaceXService.getNextLaunch().subscribe(nextLaunch => {
      this.nextRocketLaunch = nextLaunch;
    });
    this.jokeCategories = await this.jokeService.getJokeCategories();
  }
}
