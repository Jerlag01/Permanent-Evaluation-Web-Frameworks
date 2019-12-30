import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-de-mol2',
  templateUrl: './de-mol2.component.html',
  styleUrls: ['./de-mol2.component.css']
})
export class DeMol2Component implements OnInit {

  FilmLijst: string[] = ["Toy Story", "Jungle Book", "The Avengers"];
  KeuzeGemaakt: boolean = false;
  FilmKeuze: number;
  FilmKosten: number[] = [_.random(0, 11), _.random(0, 11), _.random(0, 11)];
  IsBoven16Jaar: boolean;
  MagBetalen: boolean = false;

  FilmNaam: string;
  FilmKost: number;
  TimesClicked: number = 0;

  constructor() { }

  ngOnInit() {

  }

  VoegFilmToe(Naam: HTMLInputElement) {
    this.FilmLijst.push(Naam.value);
    this.FilmKosten.push(_.random(0, 11));
  }

  KeuzeFilmGemaakt() {
    this.FilmNaam = this.FilmLijst[this.FilmKeuze];
    this.FilmKost = this.FilmKosten[this.FilmKeuze];
    this.KeuzeGemaakt = true;

  }

  JaarCheck() {
    this.IsBoven16Jaar = true;
  }

  HeeftBetaald() {
    this.KeuzeGemaakt = false;
    this.MagBetalen = true;
  }

  Reset() {
    this.MagBetalen = false;
    this.KeuzeGemaakt = false;
    this.IsBoven16Jaar = false;
  }

  onMouseClick(event: any) {
    this.TimesClicked++;
  }

}
