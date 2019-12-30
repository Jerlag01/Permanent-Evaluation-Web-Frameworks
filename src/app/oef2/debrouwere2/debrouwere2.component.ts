import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-debrouwere2',
    templateUrl: './debrouwere2.component.html',
    styleUrls: ['./debrouwere2.component.css']
})
export class DeBrouwere2Component implements OnInit {
    showing : boolean;
    buttonDisabled : boolean;
    hover : boolean;
    StartKnop : string = "Toon series";
    xPos : number;
    yPos : number;

    episodes = [
        { title: 'Winter Is Coming', director: 'Tim Van Patten' },
        { title: 'The Kingsroad', director: 'Tim Van Patten' },
        { title: 'Lord Snow', director: 'Brian Kirk' },
        { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
        { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
        { title: 'A Golden Crown', director: 'Daniel Minahan' },
        { title: 'You Win or You Die', director: 'Daniel Minahan' },
        { title: 'The Pointy End', director: 'Daniel Minahan' }
      ];
    
    constructor() {

    }

    hoverToggle() {
        this.hover = !this.hover;
    }

    StartButton() {
        this.showing = true;
        this.buttonDisabled = true;
    }
    
    coordsUpdate(event : MouseEvent) : void {
        this.xPos = event.clientX;
        this.yPos = event.clientY;
    }

    ngOnInit() {
        this.showing = false;
        this.buttonDisabled = false;
        this.hover = false;
    }
}