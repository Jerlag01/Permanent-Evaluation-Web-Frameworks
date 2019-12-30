import { Component, OnInit } from '@angular/core';
import { GacoService } from './gaco.service';

@Component({
  selector: 'app-gaco3',
  templateUrl: './gaco3.component.html',
  styleUrls: ['./gaco3.component.css']
})
export class Gaco3Component implements OnInit {

  randomanswer;
  sizeH = 200;
  sizeW = 200;
  constructor(private service: GacoService){
    // this.RandomYesOrNo();
   }
  ngOnInit() {
  }

  RandomYesOrNo(){
    
    this.service.answer().subscribe((result)=>{
      this.randomanswer={
      answer : result.answer,
      image:result.image
    }
  });
}

}
