import { Injectable } from '@angular/core'
import { HEROES } from './mock-heroes'
import { Hero } from './hero';

//this decorator ensures consitency and future proofing, in case any dependencies need to be injected into this service later on
@Injectable()
export class HeroService {
    //for async callback e.g. a server may take time to give back the results, we use Promises in Angular and the results are displayed when they are resolved
    getHeroes() : Promise<Hero[]> {
        return Promise.resolve(HEROES);
    } //stub

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 5000);
        });
      }
}