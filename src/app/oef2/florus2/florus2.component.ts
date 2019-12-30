import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-florus2',
  templateUrl: './florus2.component.html',
  styleUrls: ['./florus2.component.css']
})
export class Florus2Component implements OnInit {

  enable: boolean = true;
  showList: boolean = false;
  getallen: number[] = [1, 2, 4, 8, 16, 32, 64, 128]
  Length:number = 100;
  
  constructor() { }

  ngOnInit() {
  }

  ShowHide = (length: number ) =>{
    if(this.showList == true){
      this.showList = false;
      this.Length = 100;
    }
    else{
      this.showList = true;
      this.Length = length;
    }
    

  }
  Enable(){
    this.enable = false;
  }

}
