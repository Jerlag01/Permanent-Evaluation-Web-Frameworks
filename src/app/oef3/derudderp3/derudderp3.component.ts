import { Component, OnInit } from '@angular/core';
import {DerudderpService} from './derudderp.service'
import { Post } from './interface';
import { BaertService } from '../baert3/baert.service'
import { IGame } from '../baert3/bggInterface';

@Component({
  selector: 'app-derudderp3',
  templateUrl: './derudderp3.component.html',
  styleUrls: ['./derudderp3.component.css']
})
export class Derudderp3Component implements OnInit {

  posts:Post[];
  game: IGame[];
  constructor(private DerudderpService: DerudderpService, private beartService: BaertService) { }

  ngOnInit() {
      this.DerudderpService.getPosts().subscribe(data=>{
      this.posts = data;
    });

    this.beartService.Collection.subscribe(Game =>{
      this.game = Game
      })
  }

}
