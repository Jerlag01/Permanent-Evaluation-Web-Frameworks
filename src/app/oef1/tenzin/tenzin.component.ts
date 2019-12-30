import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenzin',
  templateUrl: './tenzin.component.html',
  styleUrls: ['./tenzin.component.css']
})
export class TenzinComponent implements OnInit {
  TimeNow:number;
  BMI:number = 0;
  imageUrl:string = "https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_960_720.png";

  ApCharacter: string ="";
  imageZodiac:string="https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_960_720.png";
  constructor() {

    setInterval(this.UpdateTime,1000);
   }
   

  ngOnInit() {
  }



  BmiCalculate = (Height:number =0,Weight:number =0) =>{
    this.BMI = Weight / (Height );
  }
  GetResult(): string{
    if(this.BMI<20&&this.BMI>0){
      this.imageUrl ="https://cdn.pixabay.com/photo/2017/07/14/16/48/skeleton-2504345_960_720.jpg";
      return "underweight";
    }
    else if(this.BMI <25 && this.BMI>19){
      this.imageUrl = "https://cdn.pixabay.com/photo/2016/05/30/13/05/girl-1424685_960_720.png";
      return "healthy weight";
    }
    else if(this.BMI <40 && this.BMI>29){
      this.imageUrl = "https://cdn.pixabay.com/photo/2012/04/24/13/37/man-40096_960_720.png"
      return "overweight";
    }
    else if(this.BMI >39){
      this.imageUrl = "https://cdn.pixabay.com/photo/2013/07/13/12/49/guy-160411_960_720.png";
      return "obese";
    }
    else return " Please, write the input fields";
  }

  ZodiacResult = (maand:number) =>
  {
    // let maand: number = birthYear;
    if(maand<4 && maand>0 )
    {
      this.ApCharacter = "You are a born Nerd";
      this.imageZodiac ="https://publicdomainvectors.org/photos/redhead-blue-nerd-glasses.png";
    }
    else if( maand<7 && maand>3){
      this.ApCharacter = "You are a born Villian";
      this.imageZodiac ="https://publicdomainvectors.org/photos/1434877937.png";
    }
    else if(maand>6 && maand<13){
      this.ApCharacter = "You are a born Athlete";
      this.imageZodiac = "https://publicdomainvectors.org/photos/Muscle-Man.png";
    }
    else{
      this.ApCharacter = "What are You doing, Alien?!! number only 1-12";
      this.imageZodiac = "https://publicdomainvectors.org/photos/alienhead.png";
    }
  }
  UpdateTime = () =>{
    this.TimeNow = Date.now();
  }
    

    
  
}
