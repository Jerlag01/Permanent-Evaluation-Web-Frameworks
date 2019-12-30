import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masoud2',
  templateUrl: './masoud2.component.html',
  styleUrls: ['./masoud2.component.css']
})
export class Masoud2Component implements OnInit {
 
  Naam:string="Masoud Rahmatullah";
  count:number=0;
  currentNumber = 0;
  show:boolean= true;
  img:any;
  constructor() {
    
    
   }

   showMsg() {
    alert("You Clicked Me!");
  }

  Add(){
    this.count++;
    console.log(this.count);
  }

  Sub(){
    this.count--;
    console.log(this.count);
  }

   


   people: any[] = [
    {
      "naam": "Masoud Rahmatullah",
      "Woon":"Antwerpen"
    },
    {
      "naam": "sarah",
      "Woon":"Berchem"
    },
    {
      "naam": "Nadir",
      "Woon":"Gent"
    },
    {
      "naam": "Monica",
      "Woon":"Wilrijk"
    }
    
  ];
  //
  isButtonTitleClicked: Array<boolean>;

public onButtonTitleClicked(i: number): void {
   //whatever you want to happen when button is clicked
   this.isButtonTitleClicked[i] = true;
}
  //
  buttonData = [{
    title: 'Prediction',
    description: 'text',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(1).jpg'
},
{
    title: 'Rebalancing',
    description: 'text',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(1).jpg'
},
{
    title: 'Visualization',
    description: 'text',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(1).jpg'
}];

  //

   
    
  images: any[];
  ngOnInit() {
    this.images = [];
    this.images.push({source:'https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg', alt:'Description 1', title:'Title 1'});
    this.images.push({source:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(1).jpg', alt:'Description 2', title:'Title 2'});
    this.images.push({source:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(2).jpg', alt:'Description 3', title:'Title 3'});
    this.images.push({source:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(3).jpg', alt:'Description 4', title:'Title 4'});
}
  

}
