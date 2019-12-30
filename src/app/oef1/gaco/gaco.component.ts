import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gaco',
  templateUrl: './gaco.component.html',
  styleUrls: ['./gaco.component.css']
})
export class GacoComponent implements OnInit {

  public theTime: Date;
  public counter: number = 0;
  public curr1: string = "Euro"; 
  public curr2: string = "Swiss Franc";
  public val1: number;
  public val2: number = 0;
  private convertrix: number= 1.1;
  
  constructor() { 

    this.theTime = new Date();

    setInterval(() => {
      this.UpdateTime();
    }, 1000);
  }

  UpdateTime(): void {
    this.theTime = new Date();
  }
  SwitchCurrency(): void {
    if (this.curr1 == "Euro"){
      this.curr1 = "Swiss Franc"
      this.curr2 = "Euro"
      this.convertrix = 0.9;
    }
    else
    {
      this.curr1 = "Euro"
      this.curr2 = "Swiss Franc"
      this.convertrix = 1.1;
    }
  }
  Calculate(): void{
    this.val2 = this.val1 * this.convertrix;
  }

  name: string = '';

  setValue() { this.name = 'Nancy'; }




  ButtonCounterDown(): void
  {
    this.counter--;    
  }
  ButtonCounterUp(): void
  {
    this.counter++;    
  }
  ButtonRandomGen(): void{
    this.counter = Math.floor((Math.random()*100)+1);
  }
  
  ngOnInit() {
  }

}
