import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//services are used to inject data into a component. a component should only care about the styling.
@Injectable({
  // inside of injectible that is provided in root. when provided at the root level Angular creates a single shared isntance and injects into any class that asks for it.
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //here you can create logic for API calls for data

  // states function getHeroes() returns an array of Hero type
  getHeroes(): Hero[]{

    // returns imported array from mock-heroes
    return HEROES;
  }
}
