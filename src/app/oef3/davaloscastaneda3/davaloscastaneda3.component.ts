import { Component, OnInit } from '@angular/core';
import { DavaloscastanedaService, RootObject, IRootObject2, Sprites } from './davaloscastaneda.service';
import { VerhaegenService, IChuckNorrisJoke } from './../verhaegen3/verhaegen.service';
import { BogaertsService } from '../bogaerts3/bogaerts.service';
import { Launch } from '../bogaerts3/interfaces';




@Component({
  selector: 'app-davaloscastaneda3',
  templateUrl: './davaloscastaneda3.component.html',
  styleUrls: ['./davaloscastaneda3.component.css']
})
export class Davaloscastaneda3Component implements OnInit {

  naam : string[] = [];
  button: boolean=false;
  begin: boolean=true;
  tweede: boolean=false;
  counter: string;
  naam2: string;
  lijst: RootObject;
  lijst2: IRootObject2;
  Pokejoke : IChuckNorrisJoke;
  Pokelaunch : Launch;

  constructor(private service : DavaloscastanedaService, private JokeService: VerhaegenService,private spaceXService : BogaertsService) {
    // this.service.Pokemons().subscribe(d => {this.lijst = d
    //  for (let index = 0; index < d.count; index++) {
    //   this.naam[index] = this.lijst.results[index].name;
    //   }}); 
   }
   
   btn = (counter:string) =>{
    this.begin=false;
    this.tweede=true;
    console.log(counter);
    this.service.Pokemons2(counter).subscribe(f => {this.naam2=f.sprites.front_default;
    });
  }

  async getRandomjoke(){
    this.begin=true;
    this.tweede=false; 
      this.Pokejoke = await this.JokeService.getRandomJoke()     
      
  }

  ngOnInit() {
    this.getRandomjoke();      
    this.spaceXService.getLatestLaunch().subscribe(f => {
      this.Pokelaunch = f;
    });
  }

}
