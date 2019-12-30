import { Component, OnInit, Input } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import { Launch } from '../interfaces';
import localeNl from '@angular/common/locales/nl';

@Component({
  selector: 'app-bogaerts-child',
  templateUrl: './bogaerts-child.component.html',
  styleUrls: ['./bogaerts-child.component.css']
})
export class BogaertsChildComponent implements OnInit {

  @Input()
  launchObj: Launch;

  constructor() { 
    registerLocaleData(localeNl, 'nl');
  }

  ngOnInit() {
  }

}
