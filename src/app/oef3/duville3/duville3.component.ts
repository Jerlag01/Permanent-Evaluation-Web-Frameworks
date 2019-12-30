import { Component, OnInit } from '@angular/core';
import { DuvilleService } from './duville.service';
@Component({
  selector: 'app-duville3',
  templateUrl: './duville3.component.html',
  styleUrls: ['./duville3.component.css']
})
export class Duville3Component implements OnInit {

  ip : string;
  city : string;
  country : string;
  isp : string;

  ipInput : string = "8.8.8.8";

  constructor(private ipService : DuvilleService) { 
    this.ipChecker();
  }

  private ipChecker() {
    this.ipService.GetData(this.ipInput).subscribe((result) => {
      console.log(result);
      this.ip = result.ip;
      this.city = result.city;
      this.country = result.country;
      this.isp = result.org;
    });
  }

  get IpInput(){
    return this.ipInput;
  }
  set IpInput(value : string){
    this.ipInput = value;
    this.ipChecker();
  }
  ngOnInit() { }

}
