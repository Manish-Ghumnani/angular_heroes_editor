import { Injectable } from '@angular/core'
import { HEROES } from './mock-heroes'
import { Hero } from './hero';

//this decorator ensures consitency and future proofing, in case any dependencies need to be injected into this service later on
@Injectable()
export class HeroService {
    getHeroes() : Hero[] {
        return HEROES;
    } //stub
}