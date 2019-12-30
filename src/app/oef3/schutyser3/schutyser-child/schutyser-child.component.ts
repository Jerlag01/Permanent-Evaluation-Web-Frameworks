import { Component, OnInit, Input } from '@angular/core';
import { IMoney,IAllCoins, SchutyserService } from './../schutyser.service';

@Component({
  selector: 'app-schutyser-child',
  templateUrl: './schutyser-child.component.html',
  styleUrls: ['./schutyser-child.component.css']
})
export class SchutyserChildComponent implements OnInit {

  bedrag : number = 0;

  @Input() base: string;
  @Input() convert: string;
  @Input() cours: number;

  constructor(private service: SchutyserService) { 
  }

  ngOnInit() {  
  }

  ConvertCoin(amount : number){
    this.bedrag = amount*this.cours    
  }

}
