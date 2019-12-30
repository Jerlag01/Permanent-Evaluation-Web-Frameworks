import { Component, OnInit, Input } from '@angular/core';
import { Offense } from './offenseInterfaces';
import { HumbletService } from './humblet.service';
import { Subscription } from 'rxjs';
import { GeversService } from '../gevers3/gevers.service';
import {Bier} from '../gevers3/interfaceBier';


@Component({
  selector: 'app-humblet3',
  templateUrl: './humblet3.component.html',
  styleUrls: ['./humblet3.component.css']
})

export class Humblet3Component implements OnInit {
  offenses: Offense[] = [];
  subsciption: Subscription;
  subscriptionGevers: Subscription;
  randomBeer: Bier[] = [];

  constructor(private HumbletService: HumbletService, private GeversService: GeversService) { }

  ngOnInit() {

    this.subsciption = this.HumbletService.getAllOffenses().subscribe(data=>{
      this.offenses = data;
    });

    // helaas vond ik niet hoe ik de randombeer moest tonen in de html :'(
    this.subscriptionGevers = this.GeversService.getRandomBier().subscribe(data=>{
      this.randomBeer = data;
    });
  }

  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }


}
