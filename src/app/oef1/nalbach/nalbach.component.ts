import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nalbach',
  templateUrl: './nalbach.component.html',
  styleUrls: ['./nalbach.component.css']
})
export class NalbachComponent implements OnInit {
  Naam = "Lukasz Nalbach";
  datum = new Date();
  isShow1 = false;
  isShow2 = true;
  isShow3 = true;
  

  onClick1() 
  {
    this.isShow1 = false;
    this.isShow2 = true;
    this.isShow3 = true;
  }
  onClick2() 
  {
    this.isShow1 = true; 
    this.isShow2 = false;
    this.isShow3 = true;   
  }
  onClick3() 
  {
    this.isShow1 = true; 
    this.isShow2 = true;
    this.isShow3 = false;
  }

  constructor() { }

  ngOnInit() 
  {
    setInterval(() => { this.datum = new Date(); }, 1000);
    
   
  }

}
