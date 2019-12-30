import { Component, OnInit, Input } from '@angular/core';
import { SentenService, IDonaldQuote } from './../senten.service';


@Component({
  selector: 'app-senten-child',
  templateUrl: './senten-child.component.html',
  styleUrls: ['./senten-child.component.css']
})
export class SentenChildComponent implements OnInit {

  constructor(private Service : SentenService) { }
  
  imageToShow: any;
  isImageLoading: boolean;
  @Input() quote: IDonaldQuote;
  

  ngOnInit() {
    this.getRandomQuote();
    this.getImageFromService();
    
  }
  async getRandomQuote(){
    this.quote= await this.Service.getQuote();
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
    this.Service.getMeme().subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
}
}
