import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulckens2',
  templateUrl: './bulckens2.component.html',
  styleUrls: ['./bulckens2.component.css']
})
export class Bulckens2Component implements OnInit {

  
  bdayList = [];
  nameList = [];
  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }



  addName(inputBox){
    if (inputBox.value.length > 0)    {
      this.nameList.push(inputBox.value);
      inputBox.value = ""
    }
  }

  addBday(inputBox){
    
    if (inputBox.value.length > 0)    {
      this.bdayList.push("No Proper Date Given")
     
      inputBox.value = "";
    } else (
      
      this.bdayList.push(inputBox.value)
      
    )
  }
}
