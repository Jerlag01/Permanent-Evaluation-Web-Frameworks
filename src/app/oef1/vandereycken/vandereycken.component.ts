import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vandereycken',
  templateUrl: './vandereycken.component.html',
  styleUrls: ['./vandereycken.component.css']
})
export class VandereyckenComponent implements OnInit {

  name : string;
  date : Date  = new Date();
  
  constructor() { 
    this.name = 'wannes vandereycken';
    setInterval(()=> this.updateTime(), 1000);
    
  }
  
  updateTime=()=>{
    this.date = new Date();
  }

  ngOnInit() { 
  }
  

}
