import { Component, OnInit } from '@angular/core';
import { DemolService } from '../demol.service';

@Component({
  selector: 'app-demol-child',
  templateUrl: './demol-child.component.html',
  styleUrls: ['./demol-child.component.css']
})
export class DemolChildComponent implements OnInit {

  Name: string;

  constructor(private ShowSvc: DemolService) { }

  ngOnInit() {
  }


  SetName() {
    this.ShowSvc.movieid = this.Name;
  }

}
