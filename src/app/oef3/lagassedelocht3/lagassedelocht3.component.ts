import { Component, OnInit } from '@angular/core';
import { LagassedelochtService } from './lagassedelocht.service';

@Component({
  selector: 'app-lagassedelocht3',
  templateUrl: './lagassedelocht3.component.html',
  styleUrls: ['./lagassedelocht3.component.css']
})
export class Lagassedelocht3Component implements OnInit {
  carBrand: string;
  carModel1: string;
  carModel2: string;
  carModel3: string;
  carModel4: string;
  constructor(private service: LagassedelochtService) {
    this.carBrand =  service.carBrand;
    this.carModel1 = service.carModel1
    this.carModel2 = service.carModel2;
    this.carModel3 = service.carModel3;
    this.carModel4 = service.carModel4;
   }

  ngOnInit() {
  }

}
