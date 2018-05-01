import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  //here we directly use observable mainly becaues repeated http requests are to be made to the server and no longer a single chunk of data is to be processed
  //hence, no need to convert to a promise anymore
  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`api/heroes/?name=${term}`)
               .map(response => response.json().data as Hero[]);
  }
}