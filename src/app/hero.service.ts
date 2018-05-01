import { Injectable } from '@angular/core'
import { HEROES } from './mock-heroes'
import { Hero } from './hero';
import {Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


//this decorator ensures consitency and future proofing, in case any dependencies need to be injected into this service later on
@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';   //URL to web api
    private headers = new Headers({ 'Content-Type' : 'application/json' });

    constructor(private http: Http) {}

    //for async callback e.g. a server may take time to give back the results, we use Promises in Angular and the results are displayed when they are resolved
    //1. The Angular http.get returns an RxJS Observable
    //2. We convert tht observable to a promise using the toPromise operator 
    //3. in the Promise's then() callback, we call the json method of the HTTP Response to extract the data within the response.
    //4. The response JSON has a single data property, which holds the array of heroes that the caller wants.
    //5. At the end of getHeroes(), we catch server failures and pass them to an error handler.
    getHeroes() : Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data as Hero[])
                .catch(this.handleError);
    } //stub

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 5000);
        });
      }

      getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Hero)
          .catch(this.handleError);
      }

    update(hero: Hero) : Promise<Hero> {
        //use the back tick notation
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Hero)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
}