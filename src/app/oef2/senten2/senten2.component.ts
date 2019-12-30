import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senten2',
  templateUrl: './senten2.component.html',
  styleUrls: ['./senten2.component.css']
})
export class Senten2Component implements OnInit {

  name: string;
  knopkleur : boolean;
  fotoURL : string ="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/56/thumbs-up-sign_1f44d.png"; 
  achtergrondKleur:string;
  constructor() { }

  ngOnInit() {
  }
  boodschappenlijstje = [];
  productToevoegen() {
      this.boodschappenlijstje.push(this.name);
    }
    rood(){
      this.knopkleur = !this.knopkleur;
      this.veranderkleur(this.knopkleur);
    }
    veranderkleur(tussen: boolean){
      if(tussen == true){
        this.achtergrondKleur = "red";
      }else{
        this.achtergrondKleur = "white";
      }
    }
}
