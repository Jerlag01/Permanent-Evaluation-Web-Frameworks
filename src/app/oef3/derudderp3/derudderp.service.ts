import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './interface';


@Injectable({
  providedIn: 'root'
})
export class DerudderpService {

  constructor(private client:HttpClient) { }

  getPosts(){

    return this.client.get<Post[]>("http://jsonplaceholder.typicode.com/posts")

  }
}
