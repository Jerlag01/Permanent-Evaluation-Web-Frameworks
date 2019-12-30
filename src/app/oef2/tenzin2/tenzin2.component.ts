import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tenzin2',
  templateUrl: './tenzin2.component.html',
  styleUrls: ['./tenzin2.component.css']
})
export class Tenzin2Component implements OnInit {
  SpelStatus : boolean = false;
  MenuStatus: boolean = true;
  ResultStatus: boolean = false;
  ResultBtn: boolean = true;
  InschrijvingStatus: boolean = false;
  NaamVeld: boolean= false;

  BFoto: number = 500;
  HFoto: number = 300;
  SpelerNummer : number = 1;
  Score: number =0;
  Naam: string ="";
  SpelersNaam:string[] =[];

  SpelerGeslacht: string[]= ["vrouw","man","vrouw","man"]

  ChuckUrl ="https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE1XFxcLzAzXFxcLzE5MTczNzQzXFxcL1dlLXdhbnQteW91LWNodWNrLW5vcnJpcy5qcGdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yNjRhMmRiZTM3MGYyYzY3NWZjZFwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI2YTFlMTcwMDdjMjg1ZmY1OWIxYWY0YmUwYWE2MTNhNmI0YmQyMTJiIn0=/we-want-you-chuck-norris.jpg"
  constructor() 
  {
    
  }

  ngOnInit() {
  }
  ToonResulaat = () =>{
    this.ResultStatus = true;
    this.SpelStatus = false;
  }

  SpelenStatus = () =>{
    this.InschrijvingStatus = true;
    this.MenuStatus = false;
  }
  GeslachtCheckerM = () =>{
    if(this.SpelerNummer >3){ 
     return this.ResultBtn = false;
    }
    if(this.SpelerGeslacht[this.SpelerNummer] == "man")
    this.Score += 1;

    this.SpelerNummer +=1;
  } 
  GeslachtCheckerV = () =>{
    if(this.SpelerNummer >3){
    return   this.ResultBtn = false;
    }
    if(this.SpelerGeslacht[this.SpelerNummer] == "vrouw")
    this.Score += 1;

    this.SpelerNummer +=1;
  } 
  onKey(event: any) {
    this.Naam = event.target.value ;
  }
  Inschrijven = (naam1: string,naam2: string,naam3: string,naam4: string,naam5:string ) =>{
    // kijken of er geen value zit
    if(naam1 == "")
      return this.NaamVeld = true;
    else if(naam2 == "")
      return this.NaamVeld = true;
    else if(naam3 == "")
      return this.NaamVeld = true;
    else if(naam4 == "")
      return this.NaamVeld = true;
    else if(naam5 == "")
      return this.NaamVeld = true;

    this.SpelersNaam.push(naam1,naam2,naam3,naam4)
    this.NaamVeld = false;
    this.InschrijvingStatus = false;
    this.SpelStatus = true;
  }
  
}
