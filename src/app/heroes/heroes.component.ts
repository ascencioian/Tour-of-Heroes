import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // more than just a name 
  // hero = 'Ian';

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Ian'
  }

  constructor() { }

  ngOnInit(): void {
    //place where you put code that runs on initialization

  }

}
