import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peeters',
  templateUrl: './peeters.component.html',
  styleUrls: ['./peeters.component.css']
})
export class PeetersComponent {
  datum: Date;
  counter: number = 0;
  teller: number = 1;
  teller1: number = 1;
  lyrics: string;
  word: string;
  word2: string;

  constructor() {
    setInterval(() => this.datum = new Date(), 1000)
    setInterval(() => this.ShowLyrics, 1000)
  }
  //part 1
  get IsMorning() {
    if (this.datum == null) return false;
    return this.datum.getHours() < 12
  }

  get IsEvening() {
    if (this.datum == null) return false;
    return this.datum.getHours() >= 18
  }

  get IsAfternoon() {
    if (this.datum == null) return false;
    return this.datum.getHours() >= 12
  }
  //end of part 1
  //part 2
  get ShowLyrics() {
    if (this.counter == 0) {
      this.lyrics = "Zero";
      this.counter++;
      return this.lyrics;
    }
    if (this.counter == 1) {
      this.lyrics = "One";
      this.counter++;
      return this.lyrics;
    }
    if (this.counter == 2) {
      this.lyrics = "Two";
      this.counter++;
      return this.lyrics;
    }
    if (this.counter == 3) {
      this.lyrics = "Three"
      this.counter = 0;
      return this.lyrics;
    }
  }
  //end of part 2
  //part 3
  get Upper() {
    if (this.teller == 1) {
      this.word = "UpperCase";
      return this.word
    }
  }
  get Lower() {
    if (this.teller1 == 1) {
      this.word2 = "LowerCase";
      return this.word2
    }
  }
  //end of part 3
}
