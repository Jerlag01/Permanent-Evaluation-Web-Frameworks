import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thielemans2',
  templateUrl: './thielemans2.component.html',
  styleUrls: ['./thielemans2.component.css']
})
export class Thielemans2Component implements OnInit {
  CityList: Array<City> = [];
  NoCity: boolean = true;
  Citychosen: boolean = false;
  CityImage: string;
  Searched: number = 0;
  CityNameList: string[] =[];

  
  constructor() { 
    this.CityList.push(new City("Antwerpen","red","https://www.reisroutes.be/userfiles/fotos/antwerpen-bezienswaardigheden_7648_xl.jpg"));
    this.CityList.push(new City("Brugge","blue","https://www.reisroutes.be/userfiles/fotos/brugge_3016_xl.jpg"));
    this.CityList.push(new City("Gent","black,","https://www.dewarande.be/sites/default/files/gent2.jpg"));
    this.CityList.push(new City("Brussel","green","https://www.brussel.be/sites/default/files/banner33.jpg"));
    this.CityList.push(new City("Hasselt","green","https://static.standaard.be/Assets/Images_Upload/2017/07/20/a28160c8-6ca3-11e7-a2b5-a7a89791b55d.jpg?width=1152&format=jpg"));
    this.CityList.push(new City("Leuven","red","https://blog.mediamarkt.be/wp-content/uploads/2019/09/Leuven-1920x1080.jpg"));
  }

  ngOnInit() {
    for(let i of this.CityList){
      this.CityNameList.push(i.Name.toString())
    }
  }

  Choosecity = () =>{
    this.NoCity = false
    this.Citychosen = true;
  }

  checkCity(inCity) {
    for (let i of this.CityList){
      if(inCity.value === i.Name){
        console.log("true")
        this.Citychosen = true;
        this.CityImage = i.ImageUrl
        document.getElementById("cityName").innerHTML = i.Name.toString();    //Dit is niet de Angular manier ! gebruik databinding
        let colour = i.Stadskleur.toString();
        let maindiv = document.getElementById("maindiv")   //Dit is niet de Angular manier ! gebruik databinding
        maindiv.style.backgroundColor = colour;
      }
    }
  }

  onMouseClick(event: any) {
    this.Searched++;
    for(let i of this.CityNameList){
      console.log(i)
    }
  }


}
export class City{
  constructor(name: string, stadskleur: string, url: string) {
    this.Name = name;
    this.Stadskleur = stadskleur;
    this.ImageUrl = url;
}
  Name: string;
  Stadskleur: string;
  ImageUrl: string;
}