import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dupont',
  templateUrl: './dupont.component.html',
  styleUrls: ['./dupont.component.css']
})
export class DupontComponent implements OnInit {
  
  constructor() { }

  //variables
  today: number = 0;
  value: string;
  numbOfLetters:number = 0;
  negative:number;
  birthDate:number;
  name:string="ben dupont";
  pi:number=3.14159265359;



  //functions
  onEnter(value){
    
    this.value=value;
    for (let index = 0; index < this.value.length; index++) {
      this.numbOfLetters++;
      
      
    }
  }

 
 

  ngOnInit() {
    this.today = Date.now();

    
    
  }

}
