import { Component, OnInit } from '@angular/core';

  @Component({
  selector: 'app-jongenelen',
  templateUrl: './jongenelen.component.html',
  styleUrls: ['./jongenelen.component.css']
})
export class JongenelenComponent implements OnInit {
  bday= "03/24/1998";
  datum = new Date();
  verj =new Date(this.bday);
  
  datum1 = this.datum.getTime();
  datum2 = this.verj.getTime();
  show = true;
  
  verschil= this.datum2 - this.datum1;
  dif=new Date(this.verschil)
  
  
  maxwaarde : number;
  minwaarde : number;
  randomnr : number;
  
    constructor() {
      
     }
  
    klik(){
      
    this.show = !this.show;
    }
  
    random(){
      this.minwaarde = Math.ceil(this.minwaarde);
      this.maxwaarde = Math.floor(this.maxwaarde);
      var random=  Math.floor((Math.random() * (this.maxwaarde - this.minwaarde + 1)) + this.minwaarde);
      this.randomnr= random;
      
    
    }
  
    ngOnInit() {
    }
  
  }
  