import { Component, OnInit, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IGame } from '../bggInterface';


@Component({
  selector: 'app-baert-child',
  templateUrl: './baert-child.component.html',
  styleUrls: ['./baert-child.component.css']
})
export class BaertChildComponent implements OnInit {
  @Input("game") game: IGame;
  
  ngOnInit() {
  }

  

}
