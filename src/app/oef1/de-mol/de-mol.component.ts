import { Component, OnInit } from '@angular/core';
import {Zoo} from 'src/app/oef1/de-mol/class/Zoo';

@Component({
  selector: 'app-de-mol',
  templateUrl: './de-mol.component.html',
  styleUrls: ['./de-mol.component.css']
})
export class DeMolComponent implements OnInit {

Count : number = 0;
Tijd : Date;
DeZoo : Zoo;

  constructor() {
    this.DeZoo = new Zoo();
   
   }

  ngOnInit() {
    this.DeZoo.ZooTicketPrijs = 4.50;
    setInterval(this.UpdateTime,1000);
  }

  UpdateTime = () =>
  {
    this.Tijd = new Date;
  }


  ShowNextAnimal = () =>
  {
    if(this.Count < this.DeZoo.Animals.length -1)
    this.Count++;
    else
    this.Count = 0;
  }

}
