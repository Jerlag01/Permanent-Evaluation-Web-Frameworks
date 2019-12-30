import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class JouharService {
  apiUrl = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient) 
  {}
  getUsers(){
    return this.http.get<User[]>(this.apiUrl);
  }
}
