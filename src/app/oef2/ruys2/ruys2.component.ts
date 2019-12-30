import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-ruys2',
  templateUrl: './ruys2.component.html',
  styleUrls: ['./ruys2.component.css']
})
export class Ruys2Component implements OnInit {
  logo = 'https://static.abcteach.com/free_preview/n/numfractions1010bw_p.png';
  alertString : string;
  avgAge: number =0;
  maxAge: number;
  show = true;
  divColor:string;
  xPos:number;
  yPos:number;

  people: any =[
    {"name": "Kasper Ruys", "age": 26, hide: true},
    {"name": "Elbert Kunzman", "age": 19, hide: true},
    {"name": "Federico Kratz", "age": 33, hide: true},
    {"name": "Jules Keatts", "age": 87, hide: true},
    {"name": "Sylvie Broomfield", "age": 56, hide: true}
  ];

  //setmaxAge(leeftijd:number){
  //  this.maxAge = leeftijd;
 // }

 showAge(){
   this.show = !this.show;
   
 }
 changeLogo(){
   this.logo = 'https://www.getintothis.co.uk/wp-content/uploads/2012/02/zero.jpg';
 }


 eventBind(event){
  alert(event);
 }


 onMouseClick(e: MouseEvent) {
  console.log(e);
  
  const popupHeight = 400, 
    popupWidth = 300;    

  let popupXPosition,
      popupYPosition

  if(e.clientX + popupWidth > window.innerWidth){
      popupXPosition = e.pageX - popupWidth;
  }else{
      popupXPosition = e.pageX;
  }

  if(e.clientY + popupHeight > window.innerHeight){
      popupYPosition = e.pageY - popupHeight;
  }else{
      popupYPosition = e.pageY;
  }
}
 


  ngOnInit() {
  }

}
