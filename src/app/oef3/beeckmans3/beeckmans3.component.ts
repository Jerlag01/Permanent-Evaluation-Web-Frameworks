import { Component, OnInit } from '@angular/core';
import { BeeckmansService } from './beeckmans.service';
import { Subscription } from 'rxjs';
import { User } from './interface';

@Component({
  selector: 'app-beeckmans3',
  templateUrl: './beeckmans3.component.html',
  styleUrls: ['./beeckmans3.component.css']
})
export class Beeckmans3Component implements OnInit {

  constructor(private BeeckmansService: BeeckmansService) { }
  users$: User[];
  ngOnInit() {
    return this.BeeckmansService.getUsers().subscribe(data=>{
      this.users$ = data;
    });
  }

}
