import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-belmans',
  templateUrl: './belmans.component.html',
  styleUrls: ['./belmans.component.css']
})
export class BelmansComponent implements OnInit {
  Time: Date
  rightGuess: boolean = false
  timeSet: boolean = false
  number: number = 0
  isClicked: boolean = false
  timesGuessed: number = 0
  hint: string = ""
  compliment: string = ""
  complimentResp: string = ""
  enteredCompliment: string = ""
  randomGen: number
  quotes

  constructor(private http: Http) { }

  ngOnInit() {
    setInterval(this.UpdateTime, 1000);
  }

  UpdateTime = () => {
    this.Time = new Date
  }
  guess(number: number) {
    this.timesGuessed ++
    this.isClicked = true
    if (this.timeSet)
    {
      this.rightGuess = true
      this.number = number
    }
    else{
      this.rightGuess = false  
      if(number == 0) {
        this.number = 1
      }        
      else if(number == 1){
        this.number = 0
      }        
    }
    if (this.timesGuessed == 4){
      this.hint = "Tik..."
    }
    else if (this.timesGuessed == 7) {
      this.hint = "Tok..."     
    }
    else if (this.timesGuessed == 10){
      this.hint = "Tik. Tok. Tik. Tok. Tik. Tok."
    }
    else if (this.timesGuessed == 14){
      this.hint = "Pssst kom misschien LATER maar eens terug."
    }
    else if (this.timesGuessed == 18){
      this.hint = "Pssst kijk misschien eerst eens hoe laat het wel niet is."
    }
    else{
      this.hint = ""
    }
  }

  setTime(){
    this.timeSet = !this.timeSet
    this.timesGuessed = 0
  }

  onEnter(value: string) { 
    this.enteredCompliment = value;
    this.randomGen = Math.floor(Math.random() * Math.floor(4));
    switch (this.randomGen) {
      case 0:
        this.complimentResp = "Super bedankt voor je lieve complimentje."
        break;
      case 1:
        this.complimentResp = "Ohhhh, als ik eerlijk ben vind ik hetzelfde van jou."
        break;
      case 2:
        this.complimentResp = "Jij krijgt overduidelijk goede karma."
        break;
      case 3:
        this.complimentResp = "Dankje, dat is super lief!"
        break;  
    }
  }

  getComplimentje(){
    this.randomGen = Math.floor(Math.random() * Math.floor(7));
    switch (this.randomGen) {
      case 0:
        this.compliment = "Je ziet er stralend uit vandaag!"
        break;
      case 1:
        this.compliment = "Ik merk meteen dat jij een oprecht goed persoon bent."
        break;
      case 2:
        this.compliment = "Jij bent overduidelijk een Carpe Diem persoon!"
        break;
      case 3:
        this.compliment = "You do you boo!"
        break;
      case 4:
        this.compliment = "Er zouden er meer zoals jij moeten zijn!"
        break;  
      case 5:
        this.compliment = "Keep on smiling!"
        break;
      case 6:
        this.compliment = "Kop omhoog en blijven gaan!"
        break;
    }
  }

  requestQoD(): void {
    this.http.request('http://quotes.rest/qod').subscribe((res: Response) => {
        this.quotes = res.json();
        // console.log(this.quotes)
      });
  }
}
