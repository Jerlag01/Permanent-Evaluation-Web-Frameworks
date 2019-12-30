import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-humblet2',
  templateUrl: './humblet2.component.html',
  styleUrls: ['./humblet2.component.css']
})
export class Humblet2Component implements OnInit {
  naam: string
  disabled: boolean = true;

  groupList = [{
    naam: ''
  },
  {
    naam: ''
  }
]

diertje = {
  naam: 'Poesje',
  foto: 'https://i.ytimg.com/vi/xFNDNfeffEc/maxresdefault.jpg'
}

  constructor() { }

  ngOnInit() {
  }

  wordList = [];
  addWord() {
      this.wordList.push(this.naam);
      
    }

    disable(){
      this.disabled = !this.disabled;
    }

    alert(){
      alert("Het knopje werkt");
    }

}
