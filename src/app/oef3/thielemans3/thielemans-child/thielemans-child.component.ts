import { Component, OnInit } from '@angular/core';
import { ThielemansService } from '../thielemans.service'
import { IAgify } from '../thielemans.service';


@Component({
  selector: 'app-thielemans-child',
  templateUrl: './thielemans-child.component.html',
  styleUrls: ['./thielemans-child.component.css']
})
export class ThielemansChildComponent implements OnInit {

  constructor(private service: ThielemansService) { }

  searchName(inName) {
    this.service.name = inName.value
   }

  ngOnInit() {
  }

}
