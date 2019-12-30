import { Component, OnInit, OnDestroy } from '@angular/core';
import { BogaertsService } from './bogaerts.service';
import { Launch } from './interfaces';
import { Subscription } from 'rxjs';
import { User } from '../beeckmans3/interface';
import { BeeckmansService } from '../beeckmans3/beeckmans.service';

@Component({
  selector: 'app-bogaerts3',
  templateUrl: './bogaerts3.component.html',
  styleUrls: ['./bogaerts3.component.css']
})
export class Bogaerts3Component implements OnInit, OnDestroy {

  launches: Launch[] = []
  selectorState: number = 0;
  sub: Subscription;
  currentUser: User;

  constructor(private BogaertsService: BogaertsService, private userService: BeeckmansService) { }

  ngOnInit() {
    this.sub = this.BogaertsService.getAllLaunches().subscribe(data=>{
      this.launches = data;
    });
    this.userService.getUsers().toPromise().then(data=>{
      this.currentUser = data[Math.floor(Math.random() * data.length)];
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onSelectChange(event){
    this.sub.unsubscribe();
    this.launches = [];
    switch(event){
      case "0":
        this.sub = this.BogaertsService.getAllLaunches().subscribe(data=>{
          this.launches = data;
        });
      break;
      case "1":
        this.sub = this.BogaertsService.getPastLaunches().subscribe(data=>{
          this.launches = data;
        });
      break;
      case "2":
        this.sub = this.BogaertsService.getUpcomingLaunches().subscribe(data=>{
          this.launches = data;
        });
      break;
      default:
        break;
    }
  }

  resetClick(){
    this.selectorState = 0;
    this.onSelectChange("0");
  }

}
