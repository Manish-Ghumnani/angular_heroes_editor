//to define a Component, we have to import the Component symbol
import { Component, Input } from '@angular/core';
import { Hero } from './hero';



@Component ({
    selector: 'hero-detail',
    template: `
            <!-- if not null -->
            <div *ngIf="hero">
                <h2>{{hero.name}}</h2> details
                <div><label>id: </label>{{hero.id}} </div>
                <div><label>name: </label> {{hero.name}} &nbsp;
                <input [(ngModel)]= "hero.name" placeholder="name">    
                </div>
            </div>
    `
})


//always export a component class, because we will use it else where
export class HeroDetailComponent {

//@Input decorator tells Angular that this property is public and is available for binding by a parent component. Without this, Angular refuses to bing the property
@Input() hero: Hero
}

