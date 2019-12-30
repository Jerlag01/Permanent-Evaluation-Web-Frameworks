import { Component, OnInit,Input } from '@angular/core';
import {Ifilm, Ipeople, Ispecies, Iplanets, Istarships, Ivehicles} from '../interfaceApi'
@Component({
  selector: 'app-tenzin-child',
  templateUrl: './tenzin-child.component.html',
  styleUrls: ['./tenzin-child.component.css']
})
export class TenzinChildComponent implements OnInit {

    @Input() films: Ifilm;
    @Input() people: Ipeople;
    @Input() species: Ispecies;
    @Input() planets: Iplanets;
    @Input() starships: Istarships;
    @Input() vehicles: Ivehicles;

    // ik zou hier eigenlijk een enum gebruiken, maar ik krijg een error. (dus doe het zo)
    @Input() filmsdiv: boolean;
    @Input() peoplediv: boolean;
    @Input() speciesdiv: boolean;
    @Input() planetsdiv: boolean;
    @Input() starshipsdiv: boolean;
    @Input() vehiclesdiv: boolean;


  constructor() { }

  ngOnInit() {
  }

}
