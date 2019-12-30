import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { fromEvent, interval, merge, of, range, BehaviorSubject, Subject } from 'rxjs';
import { mapTo, scan, switchMap, takeUntil, concatMap, delay, mergeMap, tap, skipWhile, map } from 'rxjs/operators';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { InputToCountdownDirective } from './input-to-countdown.directive';
import * as _ from 'lodash';

@Component({
  selector: 'app-jeroenl2',
  templateUrl: './jeroenl2.component.html',
  styleUrls: ['./jeroenl2.component.css']
})

export class Jeroenl2Component implements OnInit, AfterViewInit {
  pageOwner: string='Jeroen Lagaet';
  pageTitle: string='Countdown';
  theDate: Date;
  faPlay = faPlay;
  faPause = faPause;
  faSquare = faSquare;
  Clickamount: number = 0;
  ToDoList: ToDo[] = [];
  isListEmpty: boolean;


  @ViewChild('start', { static: true })
  startBtn: ElementRef;

  @ViewChild('pause', { static: true })
  pauseBtn: ElementRef;

  @ViewChild('reset', { static: true })
  resetBtn: ElementRef;

  techniques = [];

  intervalObs$;
  max = 0;
  min = 0;

  constructor(public d: InputToCountdownDirective ) {
    this.theDate = new Date();
    setInterval(this.UpdateDate, 1000);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const start$ = fromEvent(this.startBtn.nativeElement, 'click').pipe(mapTo(true));
    const pause$ = fromEvent(this.pauseBtn.nativeElement, 'click').pipe(mapTo(false));
    const reset$ = fromEvent(this.resetBtn.nativeElement, 'click').pipe(mapTo(null));
    const zero$ = new Subject();
    const stateChange$ = this.d.obs$.pipe(mapTo(null));
    this.intervalObs$ = merge(start$, pause$, reset$, stateChange$, zero$).pipe(
      switchMap(isCounting => {
        if (isCounting === null) return of(null);
        return isCounting ? interval(1000) : of();
      }),
      scan((accumulatedValue, currentValue) => {
        if (accumulatedValue === 0 && currentValue !== null) {
          zero$.next(null);
          return accumulatedValue;
        }
        if (currentValue === null || !accumulatedValue) return this.d.getTotalSeconds();
        return --accumulatedValue;
      })
    );

    this.d.intervalObs$.subscribe(val => {
      console.log(val)
      this.max = val.max;
      this.min = val.min;
    });


    merge(start$, pause$, reset$, zero$).pipe(
      switchMap(isCounting => {
        const random = () => {
          console.log(this.min);
          console.log(this.max);

          const value = (this.min * 1000) + (Math.floor((Math.random() * (this.max + 1 - this.min))) * 1000)
          console.log(value);
          return value;
        };
        if (isCounting === null) return of(null);
        return isCounting ? interval(1000).pipe(
          concatMap(val => {
            return of(val).pipe(delay(random()), tap(val => {
              const arrayLength = this.techniques.length;
              const randValue = Math.floor((Math.random() * arrayLength))
              const message = this.techniques[randValue];
            }));
          })
        ) : of();
      }),
    ).subscribe(console.log)
    }

  UpdateDate = () => {
    this.theDate = new Date();
  }

  addList(inputBox) {
    if(inputBox.value.length == 0) {
      this.isListEmpty = true
    }
    else {
      this.ToDoList.push(new ToDo(inputBox.value));
      inputBox.value = ""
    }
  }

  onEnter(event: KeyboardEvent) {
    if (event.code == "Enter")
      this.addList(event.target)
    else
      this.isListEmpty = false;
  }

  onMouseClick(event: any) {
    this.Clickamount++;
  }
}

  class ToDo {
    tedoen: string;

    constructor(tedoen: string) {
      this.tedoen = tedoen;
    }
  }
