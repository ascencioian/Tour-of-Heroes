import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

//services
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //heroes variable is set to an empty array of hero type
  heroes: Hero[] = [];

  //initiates selectedHero with no value
  selectedHero?: Hero;

  //function to handle click event
  onSelected(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

  //imported list of heroes (not as a service)
  // heroes = HEROES;

  //single hero object
  hero: Hero = {
    id: 1,
    name: 'Ian'
  }

  //here you can inject services into a components constructor
  //the variable is lowercase of service
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //place where you put code that runs on initialization

    //calls
    this.getHeroes()
  }

  //method htat sets heroes on line 17 to whatever getHeroes returns
  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

}
