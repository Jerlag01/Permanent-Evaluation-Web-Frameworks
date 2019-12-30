import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-humblet',
  templateUrl: './humblet.component.html',
  styleUrls: ['./humblet.component.css']
})
export class HumbletComponent implements OnInit {
  randomItem: number;
  stringRandomItem: string = "Balletje werd nog niet gerold";
  gedrukteKnop: string;
  gewonnen: boolean = false;
  data: string;
  loading: boolean;
  Time: Date;

  constructor(public http: Http) { }


  ngOnInit() {
    setInterval(this.UpdateTime, 1000);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  clickSSP(gedruktID) {
    this.randomItem = this.getRandomInt(9);
    switch (this.randomItem) {
      case 0:
        this.stringRandomItem = "0"
        break;
      case 1:
        this.stringRandomItem = "1"
        break;
      case 2:
        this.stringRandomItem = "2"
        break;
      case 3:
        this.stringRandomItem = "3"
        break;
      case 4:
        this.stringRandomItem = "4"
        break;
      case 5:
        this.stringRandomItem = "5"
        break;
      case 6:
        this.stringRandomItem = "6"
        break;
      case 7:
        this.stringRandomItem = "7"
        break;
      case 8:
        this.stringRandomItem = "8"
        break;
      case 9:
        this.stringRandomItem = "9"
        break;
      default:
        this.stringRandomItem = "Balletje werd nog niet gerold"
        break;
    }
    this.gedrukteKnop = gedruktID;
    if (this.randomItem.toString() == this.gedrukteKnop) {
      this.gewonnen = true;
    } else {
      this.gewonnen = false;
    }
  }

  list = ['Brood', 'Choco', 'Cola'];
  addItem(newItem: string) {
    if (newItem) {
      this.list.push(newItem);
    }
  }

  UpdateTime = () => {
    this.Time = new Date;
  }

  wordList = [];
  addWord(newWord: string) {
    if (newWord) {
      this.wordList.push(newWord);
    }
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('https://datasets7.antwerpen.be/politie/overtredingen.json')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}