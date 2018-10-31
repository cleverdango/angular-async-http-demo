import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  async addHero(hero: Hero): Promise<Hero> {
    try {
      return await this.http.post<Hero>('/hero', hero).toPromise();
    } catch (error) {
      throw error;
    }
  }
}
