import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mughal',
  templateUrl: './mughal.component.html',
  styleUrls: ['./mughal.component.css']
})
export class MughalComponent implements OnInit {
  Naam : string = 'Afaq Jameel Mughal';
  Number : number = 0;

  NameGenCharK : string = "";
  NameGenCharL : string = "";
  NameGenName : string = "";

  Today : Date = new Date();
  DaysLeft : number;
  
  constructor() 
  { 
    setInterval(this.Randomised,5000);
    setInterval(this.NewYearCounter,1000);
  }

  ngOnInit() 
  {

  }

  Randomised = () =>{
    this.Number = Math.floor(Math.random()*101)+1
  }

  NameGen = () =>{
    var result : string = "";
    var klinkers : string = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
    var MedeKlinkers : string = "AEIOUaeiou";
    
    var KL : number = klinkers.length;
    var MKL : number = MedeKlinkers.length;
    var nameW : string = "";

      for(var i = 0; i< 3; i++){
      this.NameGenCharK = klinkers.charAt(Math.floor(Math.random()*KL))
      nameW += this.NameGenCharK;
      this.NameGenCharL = MedeKlinkers.charAt(Math.floor(Math.random()*MKL))
      nameW += this.NameGenCharL;
    }
    this.NameGenName = nameW.toLowerCase();
  }

  NewYearCounter = () =>{
    var NewYear = new Date(this.Today.getFullYear()+1,1,1);
    this.DaysLeft = Math.floor((NewYear.getTime() - this.Today.getTime()));
  }
}