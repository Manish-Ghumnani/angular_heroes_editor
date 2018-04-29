//to define a Component, we have to import the Component symbol
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';


@Component ({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})


//always export a component class, because we will use it else where
export class HeroDetailComponent implements OnInit {

//@Input decorator tells Angular that this property is public and is available for binding by a parent component. Without this, Angular refuses to bing the property
@Input() hero: Hero

constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    //the location service maintains the browser history stack and can be used to get the last url visited
    private location: Location
) {}


//Inside the ngOnInit() lifecycle hook, we use the paramMap Observable to extract the id parameter value from
//the ActivatedRoute service and use the HeroService to fetch the hero with that id
//Also, here the JS '+' operator to convert the id which is in string format to a 'number'
//The subscriptions are cleaned up when the component is destroyed, so we don't need to unsubscribe
ngOnInit(): void{
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero)
}

//to go back on step
goBack() : void {
    this.location.back();
}
}

