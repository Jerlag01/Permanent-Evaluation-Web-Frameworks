import { Component, OnInit, Input } from '@angular/core';
import { Offense } from '../offenseInterfaces';

@Component({
  selector: 'app-humblet-child',
  templateUrl: './humblet-child.component.html',
  styleUrls: ['./humblet-child.component.css']
})
export class HumbletChildComponent implements OnInit {

  @Input()
  offenseObj: Offense;

  constructor() { 
  }

  ngOnInit() {
    this.offenseObj.datum_vaststelling;
  }

}
