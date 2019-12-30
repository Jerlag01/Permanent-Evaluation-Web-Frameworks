import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oef2-quinten',
  templateUrl: './oef2-quinten.component.html',
  styleUrls: ['./oef2-quinten.component.css']
})
export class Oef2QuintenComponent implements OnInit {

  formactive: boolean = false; //ngif
  showdatum: boolean = false; //ngif
  items = ["button1", "button2"]; //ngfor for item callback
  plaatsnamen = ["Antwerpen", "Brussel", "Doornik"]; //ngfor
  color: string = "red";

  datum: Date = new Date;

 // template: '<p *ngFor="let plaats of plaatsnamen">{{plaats}}</p>' //property binding

  constructor() { }

  showform = () =>{
    //nfif operates based on this function here, laat de plaatsnamen zien. //event binding
    this.formactive = !this.formactive;
  }

  datumtoggle = () =>{
    this.showdatum = !this.showdatum;
  }

  changecolor = () =>{
    this.color = "blue";
    // document.getElementById("hovertag").style.backgroundColor = "blue";
  }
  changecolorback = () =>{
    this.color = "red";
    // document.getElementById("hovertag").style.backgroundColor = "red";
  }

  onItemClick(event, item){ //event binding
    alert(event + " item " + item);
  }

  ngOnInit() {
  }

}
