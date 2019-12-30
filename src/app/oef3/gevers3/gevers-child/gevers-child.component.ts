import { Component, OnInit, Input} from '@angular/core';
import { Bier } from '../interfaceBier';
import { Ingredients } from '../interfaceBier';
import { Volume} from '../interfaceBier';


@Component({
  selector: 'app-gevers-child',
  templateUrl: './gevers-child.component.html',
  styleUrls: ['./gevers-child.component.css']
})
export class GeversChildComponent implements OnInit {

  @Input()
  beerObj:Bier;
  volume:Volume;



  constructor() { }

  ngOnInit() {
  }

}
