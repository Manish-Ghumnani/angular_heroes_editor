import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service'

@Component({
  selector: 'my-app',

  //ngModel - provides 2 way binding i.e. data flows in both directions and for this you need to import FormsModule
  template: `<h1>{{title}}</h1>
            <h2>My Heroes</h2>
            <ul class="heroes">
              <!-- here the * indicates that li and its children constitute a master template and li iterates over each hero instance in the array -->
              <li *ngFor="let hero of heroes" 
              [class.selected] = "hero === selectedHero"
              (click)="onSelect(hero)">   
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>

            <!-- Now every time the selectedHero changes, the HeroDetailComponent gets a new hero to display. -->
            <hero-detail [hero]="selectedHero"></hero-detail>
            `,
    styles: [`
            .selected {
              background-color: #CFD8DC !important;
              color: white;
            }
            .heroes {
              margin: 0 0 2em 0;
              list-style-type: none;
              padding: 0;
              width: 15em;
            }
            .heroes li {
              cursor: pointer;
              position: relative;
              left: 0;
              background-color: #EEE;
              margin: .5em;
              padding: .3em 0;
              height: 1.6em;
              border-radius: 4px;
            }
            .heroes li.selected:hover {
              background-color: #BBD8DC !important;
              color: white;
            }
            .heroes li:hover {
              color: #607D8B;
              background-color: #DDD;
              left: .1em;
            }
            .heroes .text {
              position: relative;
              top: -3px;
            }
            .heroes .badge {
              display: inline-block;
              font-size: small;
              color: white;
              padding: 0.8em 0.7em 0 0.7em;
              background-color: #607D8B;
              line-height: 1em;
              position: relative;
              left: -1px;
              top: -4px;
              height: 1.8em;
              margin-right: .8em;
              border-radius: 4px 0 0 4px;
            }
          `],

    //this tells Angular to create a fresh instance of the service, when it creates an AppComponent
    providers: [HeroService], 
          
})

export class AppComponent implements OnInit { 

  //lifecycle hook called during initializtion
  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'Tour of Heroes';

  //this property will be used for the hero which is currently selected
  selectedHero : Hero;

  //a public property so for the array to display the heroes' list
  heroes = HEROES;

  //select method to handle the click and display the selected hero
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  //injecting the HeroService instead of creating new instances of the service which would render it inflexible 
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    //the results will be displayed when the promises are resolved
    //arrow functions are used here
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }
}


//heroes: Hero[];


