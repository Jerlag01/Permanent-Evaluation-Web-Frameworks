import { Component, OnInit, Input } from '@angular/core';
import { MasoudService } from '../masoud.service';
import { url } from 'inspector';

@Component({
  selector: 'app-masoud-child',
  templateUrl: './masoud-child.component.html',
  styleUrls: ['./masoud-child.component.css']
})
export class MasoudChildComponent implements OnInit {
  id:number;
  type:string;
  name:string;
  url:string;
  imageid:number=50;
  // images:IImages[]=[];
  @Input() login:boolean;
  imageUrl:string;
  // info:Iinfo[]=[];
  constructor(private dataSvc:MasoudService) {
    // this.nextphoto();
    // for (let index = 0; index < 200; index++) {
    //   this.images.push({id:index,naam:`Photo${index}`});
      
    // }

    
    // this.dataSvc.GetData().subscribe((result)=>{
    //   //https://jsonplaceholder.typicode.com/todos/1
    //   for (let i = 0; i < this.info.length; i++) {
    //     this.id=result.id;
    //     this.name=result.name;
    //     console.log(this.id);
    //   }
    //   //this.id=result.id;
      
      
    // })
    
   }

  ngOnInit() {
  }

  nextphoto(){
    let photoid=163;
    
    this.imageUrl=`http://static.tvmaze.com/uploads/images/medium_portrait/${photoid}/407679.jpg`;
  }

  
}


