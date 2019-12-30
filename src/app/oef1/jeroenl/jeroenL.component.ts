import { NgModule, Component, ViewEncapsulation, ViewChild, Inject, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { formatDate } from '@angular/common';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { format } from 'date-fns';

const MINIUES = 1000 * 60;

@NgModule ({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})

@Component({
  selector: 'app-jeroenl',
  templateUrl: './jeroenl.component.html',
  styleUrls: ['./jeroenl.component.css']
})

export class JeroenlComponent {

  pageOwner: string='Jeroen Lagaet';
  pageTitle: string='Countdown';
  theDate: Date;
  @ViewChild('countdown', { static: false }) private counter: CountdownComponent;
  stopConfig: CountdownConfig = { stopTime: new Date().getTime() + 1000 * 30 };
  notify: string;
  config: CountdownConfig = { leftTime: 30, notify: [2, 5] };
  customFormat: CountdownConfig = {
    leftTime: 65,
    formatDate: ({ date, formatStr, timezone }) => {
      let f = formatStr;
      if (date > MINIUES) {
        f = 'm分s秒';
      } else if (date === MINIUES) {
        f = 'm分';
      } else {
        f = 's秒';
      }
      return formatDate(date, f, this.locale, timezone || '+0000');
    },
  };
  dateFnsConfig: CountdownConfig = {
    leftTime: 60 * 60 * 24 * 365 * (2050 - 1970),
    format: 'yyyy-MM-dd E HH:mm:ss a',
    formatDate: ({ date, formatStr }) => format(date, formatStr),
  };
  prettyConfig: CountdownConfig = {
    leftTime: 60,
    format: 'HH:mm:ss',
    prettyText: text => {
      return text
        .split(':')
        .map(v => `<span class="item">${v}</span>`)
        .join('');
    },
  };
  constructor(@Inject(LOCALE_ID) private locale: string) {
    this.theDate = new Date();
    setInterval(this.UpdateDate, 1000);
  }

  resetStop() {
    this.stopConfig = { stopTime: new Date().getTime() + 1000 * 30 };
  }

  resetTimer() {
    this.counter.restart();
  }

  handleEvent(e: CountdownEvent) {
    console.log(e);
  }

  handleEvent2(e: CountdownEvent) {
    this.notify = e.action.toUpperCase();
    if (e.action === 'notify') {
      this.notify += ` - ${e.left} ms`;
    }
    console.log(e);
  }

  UpdateDate = () => {
    this.theDate = new Date();
  }

  ngOnInit() {
  }

}

