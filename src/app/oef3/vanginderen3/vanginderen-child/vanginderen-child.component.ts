import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-vanginderen-child',
  templateUrl: './vanginderen-child.component.html',
  styleUrls: ['./vanginderen-child.component.css']
})



export class VanginderenChildComponent implements OnInit {
//komt uit de master
 @Input('master') naam : string;

  constructor() { 
  }

  ngOnInit() {
  
  }
}


