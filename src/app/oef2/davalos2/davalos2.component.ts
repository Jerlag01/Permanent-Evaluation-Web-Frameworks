import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isContext } from 'vm';
import * as _ from "lodash"
import { randomBytes } from 'crypto';

@Component({
  selector: 'app-davalos2',
  templateUrl: './davalos2.component.html',
  styleUrls: ['./davalos2.component.css']
})
export class Davalos2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  telop: number=0;
  alert: string;
  Naam : string;
  foto1: string='https://icon-library.net/images/avatar-icon/avatar-icon-6.jpg';
  fotoKdg: string = 'https://www.kdg.be/sites/default/files/styles/kdg_normal_image/public/karel_de_grote_hogeschool.jpg?itok=0mIFqfzd';
  fotoAp: string = 'https://media.glassdoor.com/sqll/973137/artesis-plantijn-hogeschool-antwerpen-squarelogo-1436179559781.png';
  foto: string[]= ['https://icon-library.net/images/avatar-icon/avatar-icon-6.jpg','https://i-love-png.com/images/wonder-women_icon-icons.com_55030.png','https://www.truetrophies.com/contentimages/92889.jpg','https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP2538-CUSA05620_00-AV00000000000036/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000','https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png']
  Achternaam: string;
  counter : string;
  buttondisabled : boolean = true;
  buttonKDG : boolean = false;
  buttonAP : boolean = false;
  studentenpasAP: boolean = false;
  studentenpasKDG: boolean = false;
  begin: boolean = true;
  leeg: boolean = false;
  keuze: string[] = ['Elektronica-ict','Informatica','verpleegkunde','vroedkunde']

  reset(){
    this.begin=true;
    this.studentenpasAP=false;
    this.studentenpasKDG=false;
    this.buttonAP= false;
    this.buttonKDG=false;
    this.buttondisabled = true;
  }
  
  onKey(event: any) {
    this.Naam = event.target.value ;
  }


  DisableAP = () =>{
    this.buttonAP = true;
    this.buttondisabled = false;

  }

  DisableKDG = () =>{
    this.buttonKDG = true;
    this.buttondisabled = false;

  }

  Studentenpas = (naam: string,achternaam: string) =>{
    
    if(naam == "")
      return this.leeg = true;
    else if(achternaam == "")
      return this.leeg = true; 

      if(this.buttonAP == true){
        this.studentenpasKDG = true;  
        this.leeg = false;
        this.begin = false;   
      }
      else if(this.buttonKDG == true){
        this.studentenpasAP = true;
        this.leeg = false;
        this.begin = false; 
      }
    }

    bewogen(event:MouseEvent){
      setTimeout(() => {
        this.alert = ""
      }, 2000);
      this.alert = "niet aankomen!!";
    }

     veranderfoto(){
       this.telop++;
       console.log(this.telop);
       if(this.telop == 0){
         this.foto1=this.foto[0];
       }
       if(this.telop == 1){
        this.foto1=this.foto[1];
      }
      if(this.telop == 2){
        this.foto1=this.foto[2];
      }
      if(this.telop == 3){
        this.foto1=this.foto[3];
      }
      if(this.telop == 4){
        this.foto1=this.foto[4];
       this.telop=-1;
      }
     }
     
}

