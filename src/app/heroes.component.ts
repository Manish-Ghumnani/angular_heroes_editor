import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service'
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],          
})

export class HeroesComponent implements OnInit { 

  //lifecycle hook called during initializtion
  ngOnInit(): void {
    this.getHeroes();
  }


  //this will navigate to the selected hero's detail (hero-detail component html)
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  //this property will be used for the hero which is currently selected
  selectedHero : Hero;

  //a public property so for the array to display the heroes' list
  heroes = HEROES;

  //select method to handle the click and display the selected hero
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  //injecting the HeroService instead of creating new instances of the service which would render it inflexible 
  constructor(
    private heroService: HeroService,
    private router: Router
    
  ) {}

  getHeroes(): void {
    //the results will be displayed when the promises are resolved
    //arrow functions are used here
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }
}


//heroes: Hero[];


