import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-peeters2',
  templateUrl: './peeters2.component.html',
  styleUrls: ['./peeters2.component.css']
})
export class Peeters2Component implements OnInit {
  ngOnInit(): void {
    this.showQuote;
  }
  imageUrl:string="https://friendlystock.com/wp-content/uploads/2019/01/7-majestic-owl-cartoon-clipart.jpg";
  Quotes:string[]=['test','test2','test3','test4','test5','test6','test7','test8','test9','test10'];
  counter:number=0;
  quote:string;
  hover:boolean=false;
  constructor() { }
  UpCounter():void{
    this.showQuote;
    this.counter++;
  }

  MouseOver(){
    this.hover = true;
  }
  MouseLeave(){
    this.hover = false;
  }

  get showQuote(){
    this.quote=this.Quotes[this.counter-1];
    return this.quote
  }

}
