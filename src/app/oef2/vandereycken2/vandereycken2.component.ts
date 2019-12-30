import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vandereycken2',
  templateUrl: './vandereycken2.component.html',
  styleUrls: ['./vandereycken2.component.css']
})

export class Vandereycken2Component implements OnInit {

  date : Date  = new Date();
  wachtwoord: string;
  count_wachtwoord: number = 0;
  naam: string[] = ["Wannes Vandereycken"];

  ngOnInit() {
  }
  
  constructor() { 
    setInterval(()=> this.updateTime(), 1000);
  }
  
  updateTime=()=>{
    this.date = new Date();
  }
  
  GenWachtwoord(event: any){
    let r = Math.random().toString(36).substr(2, 10);
    this.wachtwoord = r;
    this.count_wachtwoord++;
  }
}