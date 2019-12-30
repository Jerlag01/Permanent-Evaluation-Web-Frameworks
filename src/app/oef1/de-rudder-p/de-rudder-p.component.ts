import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-rudder-p',
  templateUrl: './de-rudder-p.component.html',
  styleUrls: ['./de-rudder-p.component.css']
})
export class DeRudderPComponent implements OnInit {

  today: number = Date.now();
  public Name = "Philip De Rudder";
  values = '';

  value = '';
  onEnter(value: string) { this.value = value; }

  constructor() { }

 
  ngOnInit() {
  }

}


