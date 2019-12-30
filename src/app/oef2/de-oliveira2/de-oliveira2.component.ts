import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-oliveira2',
  templateUrl: './de-oliveira2.component.html',
  styleUrls: ['./de-oliveira2.component.css']
})
export class DeOliveira2Component implements OnInit {
  
  GoFastText:string="Gotta Go Fast"


  ShowSanic:boolean=true;
  GiveStatus:boolean=false;
  RingCounter:number=0;

  sanic={
    url:"https://vignette.wikia.nocookie.net/meme/images/4/42/1385136139955.png/revision/latest?cb=20150207013804"
  }

  sanicRing={
    url:"https://vignette.wikia.nocookie.net/sonic/images/e/ed/ManiaRingModel.png/revision/latest?cb=20180718235630"
  }
  
  constructor() { 
    setInterval(this.CorrectRings,500)
  }

  CorrectRings=()=>{
    if(this.RingCounter<0)
      this.RingCounter=0
  }

  ngOnInit() {
  }

  GiveRings(r:number){
    this.RingCounter=r;
  }
  GottaGoFast(){
    if(this.ShowSanic) {
      this.ShowSanic=false;
      this.GoFastText="Come Back";
      this.GiveStatus=true;
    }
    else{
      this.ShowSanic=true;
      this.GoFastText="Gotta Go Fast";
      this.GiveStatus=false;
    }
  }
  LoseRings(){
    alert("auwch");
    this.RingCounter-=15;
  }


}