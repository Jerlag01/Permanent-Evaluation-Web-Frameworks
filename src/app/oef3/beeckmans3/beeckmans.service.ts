import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './interface';

@Injectable({
  providedIn: 'root'
})
export class BeeckmansService {

  constructor(private client: HttpClient) { }

  getUsers(){
    
    return this.client.get<User[]>("http://jsonplaceholder.typicode.com/users");
  }
  
}
