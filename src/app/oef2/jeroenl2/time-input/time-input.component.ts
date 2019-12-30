import {Component, OnInit} from '@angular/core';
import { InputToCountdownDirective } from '../input-to-countdown.directive';

@Component({
  selector: 'jeroenl2-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css']
})
export class TimeInputComponent implements OnInit {

  constructor(public d: InputToCountdownDirective) {}

  ngOnInit() {}

}