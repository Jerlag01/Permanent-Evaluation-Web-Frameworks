import { Component, OnInit, Input } from '@angular/core';
import { RootObject, IRootObject2 } from '../davaloscastaneda.service';

@Component({
  selector: 'app-davaloscastaneda-child',
  templateUrl: './davaloscastaneda-child.component.html',
  styleUrls: ['./davaloscastaneda-child.component.css']
})
export class DavaloscastanedaChildComponent implements OnInit {

  @Input() pokemons: IRootObject2;

  constructor() { }

  ngOnInit() {
  }

}
