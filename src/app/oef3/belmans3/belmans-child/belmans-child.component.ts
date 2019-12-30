import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-belmans-child',
  templateUrl: './belmans-child.component.html',
  styleUrls: ['./belmans-child.component.css']
})
export class BelmansChildComponent implements OnInit {
  @Input() receivedMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
