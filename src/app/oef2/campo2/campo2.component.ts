import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo2',
  templateUrl: './campo2.component.html',
  styleUrls: ['./campo2.component.css']
})
export class Campo2Component implements OnInit {
  array = [false, false];
  isMouseOn: boolean=false;
  grapje: string="";
  vraagteken: string="?";

  imgURL: string= "http://icons.iconarchive.com/icons/google/noto-emoji-activities/256/52725-trophy-icon.png";


  constructor() { }

  ngOnInit() {
  }

  ShowAnswer(){
    this.isMouseOn=true;
  }

  HideAnswer(){
    this.isMouseOn=false;
  }

  ShowGrapje(){
    this.grapje="nu kan je niet meer klikken, cool!!";
  }
}
