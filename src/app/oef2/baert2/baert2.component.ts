import { Component, OnInit } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';


//import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-baert2',
  templateUrl: './baert2.component.html',
  styleUrls: ['./baert2.component.css']
})
export class Baert2Component implements OnInit {
  GameList: Array<Games> = [];
  Image: string;
  ImageTitle: string;
  ImageVisible: Boolean;
  LoadButton: Boolean;
  
  constructor() {
    this.LoadButton = false;
  }

  GenerateGameList() : void {
    this.GameList.push(new Games("Carcassonne","Klaus Jurgen-Wrede","999 Games", 2, 5, "https://cf.geekdo-images.com/itemrep/img/IH6ugGHtABoMshU9IpZjruk_cds=/fit-in/246x300/pic2337577.jpg"));
    this.GameList.push(new Games("Snowdonia","Tony Boydell","Surprised Stare Games", 1, 5, "https://cf.geekdo-images.com/itemrep/img/Zwt6zgWvQ8dzBfaOm2101JRmQis=/fit-in/246x300/pic1430858.jpg"));
    this.GameList.push(new Games("Azul","Michael Kiesling","Plan B Games", 2, 4, "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg"));
    this.GameList.push(new Games("Escape Plan","Vital Lacerda","Eagle-Gryphon Games", 2, 4, "https://cf.geekdo-images.com/itemrep/img/NzHB0-7ujwYb1oiaCkBAD4dAfiM=/fit-in/246x300/pic4178038.jpg"));
    this.GameList.push(new Games("Flamme Rouge","Asger Harding Granerud","Lautapellit", 1, 6, "https://cf.geekdo-images.com/itemrep/img/c4xi2zIoGvZ4HdTONiCH6jz6RIw=/fit-in/246x300/pic3482521.jpg"));
    this.LoadButton = true;
    console.log("ListGenerated");
  }

  UpdateImage(_Image: string): void {
    this.ImageVisible = true;
    this.Image = _Image;
    console.log("ImageUpdated");  
  }

  ToggleImage(event: MouseEvent) {
    console.log(event.shiftKey);
    if (event.shiftKey) {
    this.ImageVisible = false;}
    }

  ngOnInit() {
  }

}
export class Games{
  constructor(titel: string, auteur: string, uitgever: string, min: number, max: number, url: string) {
    this.Title = titel;
    this.Author = auteur;
    this.Publisher = uitgever;
    this.MinPlayer = min;
    this.MaxPlayer = max;
    this.ImageUrl = url;
}
  Title: string;
  Author: string;
  Publisher: string;
  MinPlayer: number;
  MaxPlayer: number;
  ImageUrl: string;
}
