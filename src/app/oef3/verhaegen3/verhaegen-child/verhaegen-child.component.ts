import { Component, OnInit, Input } from '@angular/core';
import { VerhaegenService, IChuckNorrisJoke } from '../verhaegen.service';


@Component({
  selector: 'app-verhaegen-child',
  templateUrl: './verhaegen-child.component.html',
  styleUrls: ['./verhaegen-child.component.css']
})
export class VerhaegenChildComponent implements OnInit {

  // Possible to pass the current joke directly.
  @Input() currentJoke : IChuckNorrisJoke;
  @Input() jokeCategories : Array<string>;

  selectedCategory : string;

  constructor(
    private jokeService : VerhaegenService) { }

  ngOnInit() {
    this.getRandomJoke();
  }

  async getRandomJoke() {
    this.currentJoke = await this.jokeService.getRandomJoke();
  }

  async getJokeByCategory() {
    if (this.jokeCategories && !this.selectedCategory)
      this.selectedCategory = this.jokeCategories[0];

    this.currentJoke = await this.jokeService.getJokeByCategory(this.selectedCategory);
  }

}
