"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var mock_heroes_1 = require("./mock-heroes");
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var HeroesComponent = (function () {
    //injecting the HeroService instead of creating new instances of the service which would render it inflexible 
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        //a public property so for the array to display the heroes' list
        this.heroes = mock_heroes_1.HEROES;
    }
    //lifecycle hook called during initializtion
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    //this will navigate to the selected hero's detail (hero-detail component html)
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    //select method to handle the click and display the selected hero
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        //the results will be displayed when the promises are resolved
        //arrow functions are used here
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.css'],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//heroes: Hero[];
//# sourceMappingURL=heroes.component.js.map