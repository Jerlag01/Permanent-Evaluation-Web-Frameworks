import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerhaegenService {

  constructor(private client: HttpClient) { }

  getRandomJoke() : Promise<IChuckNorrisJoke> {
    return this.client
    .get<IChuckNorrisJoke>('https://api.chucknorris.io/jokes/random')
    .toPromise();
  }

  getJokeCategories() : Promise<Array<string>> {
    return this.client
    .get<Array<string>>('https://api.chucknorris.io/jokes/categories')
    .toPromise();
  }

  getJokeByCategory(category : string) : Promise<IChuckNorrisJoke> {
    return this.client
    .get<IChuckNorrisJoke>(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .toPromise();
  }
}

export interface IChuckNorrisJoke {
  categories: any[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}