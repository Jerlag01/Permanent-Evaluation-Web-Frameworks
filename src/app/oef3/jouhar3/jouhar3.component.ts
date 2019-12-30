import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { JouharService } from './jouhar.service';

@Component({
  selector: 'app-jouhar3',
  templateUrl: './jouhar3.component.html',
  styleUrls: ['./jouhar3.component.css']
})
export class Jouhar3Component implements OnInit {
  users$ : User[]
  constructor(private dataService : JouharService) { }

  ngOnInit() {
    return this.dataService.getUsers()
    .subscribe(data => this.users$ = data);
  }

}
