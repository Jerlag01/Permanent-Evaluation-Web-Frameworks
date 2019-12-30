import { Component, OnInit } from '@angular/core';
import { GeversService } from './gevers.service';
import { Bier } from './interfaceBier';
import { BeeckmansService } from '../beeckmans3/beeckmans.service';
import {User} from '../beeckmans3/interface';

@Component({
  selector: 'app-gevers3',
  templateUrl: './gevers3.component.html',
  styleUrls: ['./gevers3.component.css']
})
export class Gevers3Component implements OnInit {
   
  beers: Bier[];
  users: User[];

  selectorState :number =0;
  onSelectChange(event){  
    this.beers = [];
    switch(event){
  
      case "1":
        this.service.getBierByName(1).subscribe(data => this.beers=data)
      break;
      case "2":
        this.service.getBierByName(2).subscribe(data => this.beers=data)
      break;
      case "3":
        this.service.getBierByName(3).subscribe(data => this.beers=data)
      break;
      case "4":
        this.service.getBierByName(4).subscribe(data => this.beers=data)
      break;
      case "5":
        this.service.getBierByName(20).subscribe(data => this.beers=data)
      break;
      case "6":
        this.service.getRandomBier().subscribe(data => this.beers=data)
      break;
      default:
        break;
    }
  }

  constructor(private service:GeversService,private BeeckmansService: BeeckmansService) { }

  ngOnInit() {
    return this.BeeckmansService.getUsers().subscribe(data=>{
      this.users = data;
    });
  }

}
