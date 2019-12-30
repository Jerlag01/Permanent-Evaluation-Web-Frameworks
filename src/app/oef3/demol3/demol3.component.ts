import { Component, OnInit } from '@angular/core';
import { DemolService, IAnimeMovies } from './demol.service';
import { LagassedelochtService, IGenre } from '../lagassedelocht3/lagassedelocht.service';

@Component({
  selector: 'app-demol3',
  templateUrl: './demol3.component.html',
  styleUrls: ['./demol3.component.css']
})
export class Demol3Component implements OnInit {

  constructor(private ShowSvc: DemolService, private GenreSvc: LagassedelochtService) { }
  animechar: IAnimeMovies;
  nummer: number = 0;
  pagenumber: number = 0;
  searchName: string;
  loaded: boolean = false;
  genre: IGenre;


  async ngOnInit() {
    this.DisplayList();
    this.GetGenre();
  }

  GetName() {
    this.searchName = this.ShowSvc.movieid;
    this.DisplayList();
  }

  DisplayList() {
    this.ShowSvc.getAnimeCharacter(this.searchName, this.pagenumber).subscribe(animechars => {
      this.animechar = animechars;
      this.loaded = true;
    });
  }

  NextPage() {

    this.pagenumber += 5;
    this.DisplayList();

  }

  PrevPage() {
    if (this.pagenumber < 0) {
      this.pagenumber = 0;
    }
    else {
      this.pagenumber -= 5;
    }
    this.DisplayList();
  }


  GetGenre() {
    this.GenreSvc.test.subscribe(genreData => {
      this.genre = genreData;
    });
  }
}


