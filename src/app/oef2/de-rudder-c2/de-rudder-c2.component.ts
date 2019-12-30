import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-rudder-c2',
  templateUrl: './de-rudder-c2.component.html',
  styleUrls: ['./de-rudder-c2.component.css']
})
export class DeRudderC2Component implements OnInit {

  numbers: number[] = [1,2,3,4,5,6,7,8,9,10]
  letter: string
  revString: string = "";
  clicked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showText(event: KeyboardEvent){
    this.letter = event.key;
  }

  reverseString(str) {
    var splitString = str.split(""); // string => array
    var revArr = splitString.reverse(); // reserve order
    this.revString = revArr.join(""); // array samenplakken tot een string
    this.clicked = true;
}
}
