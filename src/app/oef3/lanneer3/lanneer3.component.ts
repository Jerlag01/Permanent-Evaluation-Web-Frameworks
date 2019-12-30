import { Component, OnInit } from '@angular/core';
import { LanneerService } from './lanneer.service';
import { Subscription } from 'rxjs';
import { Tentoonstellingen } from './InterfaceTentoonstellingen';

@Component({
  selector: 'app-lanneer3',
  templateUrl: './lanneer3.component.html',
  styleUrls: ['./lanneer3.component.css']
})
export class Lanneer3Component implements OnInit {
tentoonstelling: Tentoonstellingen[] = [];
subscribe: Subscription;

  constructor(private tentoonstellingService: LanneerService) {
  }

  ngOnInit() {
    this.subscribe = this.tentoonstellingService.getAlleTentoonstellingen().subscribe(data=>{
      this.tentoonstelling = data;
    });
  }

}