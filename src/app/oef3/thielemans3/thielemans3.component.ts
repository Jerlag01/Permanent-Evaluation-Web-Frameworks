import { Component, OnInit } from '@angular/core';
import { ThielemansService } from './thielemans.service'
import { IAgify } from './thielemans.service';
import { SentenService } from './../senten3/senten.service';


@Component({
  selector: 'app-thielemans3',
  templateUrl: './thielemans3.component.html',
  styleUrls: ['./thielemans3.component.css']
})
export class Thielemans3Component implements OnInit {

  name:string= "Robin";
  agify:IAgify;
  countries:string[] = this.service.Countries;

  imageToShow: any;
  isImageLoading: boolean;

  constructor(private service: ThielemansService , private externalservice: SentenService) {
  }
  
  searchName(inName) {
    this.name = inName.value;
    this.showData();
   }

  showData() {
    this.service.getAgify(this.name).subscribe(result => {
      this.agify = result;
    })
  }

  async ngOnInit() {
      this.showData()
      this.getImageFromService();
    }


    createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {this.imageToShow = reader.result;}, false);
   
      if (image) {
         reader.readAsDataURL(image);
      }
     }
  
     async getImageFromService() {
      this.isImageLoading = true;
      this.externalservice.getMeme().subscribe(data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
  }

}
