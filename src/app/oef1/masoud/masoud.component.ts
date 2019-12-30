import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-masoud',
  templateUrl: './masoud.component.html',
  styleUrls: ['./masoud.component.css']
})
export class MasoudComponent implements OnInit {
    naam:string;
    title:string;
    date:Date;
    count:number=1;
    public person={
     "VoorNaam":"Rahmatullah",
     "AkhterNaam":"Masoud"
    }
  constructor() {
    this.person.VoorNaam;
    this.person.AkhterNaam;
    this.title="welcome to my component";
    
    setInterval(this.Refresh,1000);
       this.Refresh();
       this.teller();
       
    
   }
   Refresh=()=>{
    this.date=new Date();
  }

   teller():void{
    
     this.count++;
   }

   changeVoornaam():void{
    this.person.VoorNaam="khan";
  }

  ngOnInit() {
    
  }

}
