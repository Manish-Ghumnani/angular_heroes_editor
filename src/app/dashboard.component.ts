import { Component, OnInit } from "@angular/core";
import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
    selector: "my-dashboard",
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    ///define a heroes property
    heroes: Hero[] = [];

    //injecting the heroes service
    constructor(private heroService: HeroService) {}

    //call the service to get the list of heroes inside the ngOnInit lifecycle hook
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5))
    }

}