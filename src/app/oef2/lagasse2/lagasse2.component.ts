import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lagasse2',
  templateUrl: './lagasse2.component.html',
  styleUrls: ['./lagasse2.component.css']
})
export class Lagasse2Component implements OnInit {

  input : number;
  imgBugatti : string = "https://cdn.motor1.com/images/mgl/XWlgV/s3/bugatti-type-57-atlantic-la-voiture-noire.jpg";
  imgBugatti2 : string = "https://assets.bugatti.com/fileadmin/_processed_/sei/p319/se-image-ac30bf316fc62104c0bbc3b798b3646c.jpg";
  imgBugatti3 : string = "https://assets.hemmings.com/blog/wp-content/uploads//2019/02/BUGATTI_57473_Holzschuch.jpg";

  txtBugatti : string = "foto van een Type 57 SC Atlantic";
  btnText : string;
  btnState: any = false;
  hidePic1 : any = false;
  hidePic2 : any = false;
  mouseX : number = 0;
  mouseY : number = 0;
  txtTest : string;
  brands = ["VW","Toyota","Daimler","Ford","General Motors","SAIC","Fiat","Bugatti"];

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    this.input = event.target.value;
  }

  btnAction()
  {
    if (this.btnText == "verdwijn")
    {
      this.btnState = true;
      this.btnText = "toon"
    } else if (this.btnText == "toon")
    {
      this.btnState = false;
      this.btnText = "verdwijn";
    }    

  }
  
  get KleinerDan0()
  {
    if (this.input < 0)
    return 1
    return 0
  }
  get GroterDan10()
  {
    if (this.input > 10)
    return 1
    return 0
  }

  get Tussen0En10()
  {
    if (this.input >=0 && this.input <= 10)
    return 1
    return 0
  }

  mouseOver()
  {
    this.hidePic1 = true;
    this.hidePic2 = true;
  }

  mouseLeave()
  {
  this.hidePic1 =  false;
  this.hidePic2 = false;
  }

  posXY(event: MouseEvent)
  {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

  }

  show(test: HTMLInputElement)
  {
    this.txtTest = test.value;
  }

}
