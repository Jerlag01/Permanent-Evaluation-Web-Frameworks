import { Component, OnInit, Input} from '@angular/core';
import { LanneerService } from '../lanneer.service';
import { Tentoonstellingen } from '../InterfaceTentoonstellingen';

@Component({
  selector: 'app-lanneer-child',
  templateUrl: './lanneer-child.component.html',
  styleUrls: ['./lanneer-child.component.css']
})
export class LanneerChildComponent implements OnInit {

  @Input()
  tentoonstelling: Tentoonstellingen;


  constructor() {

  }

  ngOnInit() {
  }

}
