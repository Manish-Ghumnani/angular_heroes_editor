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
var AppComponent = (function () {
    //injecting the HeroService instead of creating new instances of the service which would render it inflexible 
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
        //a public property so for the array to display the heroes' list
        this.heroes = mock_heroes_1.HEROES;
    }
    //lifecycle hook called during initializtion
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    //select method to handle the click and display the selected hero
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        //the results will be displayed when the promises are resolved
        //arrow functions are used here
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //ngModel - provides 2 way binding i.e. data flows in both directions and for this you need to import FormsModule
        template: "<h1>{{title}}</h1>\n            <h2>My Heroes</h2>\n            <ul class=\"heroes\">\n              <!-- here the * indicates that li and its children constitute a master template and li iterates over each hero instance in the array -->\n              <li *ngFor=\"let hero of heroes\" \n              [class.selected] = \"hero === selectedHero\"\n              (click)=\"onSelect(hero)\">   \n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n              </li>\n            </ul>\n\n            <!-- Now every time the selectedHero changes, the HeroDetailComponent gets a new hero to display. -->\n            <hero-detail [hero]=\"selectedHero\"></hero-detail>\n            ",
        styles: ["\n            .selected {\n              background-color: #CFD8DC !important;\n              color: white;\n            }\n            .heroes {\n              margin: 0 0 2em 0;\n              list-style-type: none;\n              padding: 0;\n              width: 15em;\n            }\n            .heroes li {\n              cursor: pointer;\n              position: relative;\n              left: 0;\n              background-color: #EEE;\n              margin: .5em;\n              padding: .3em 0;\n              height: 1.6em;\n              border-radius: 4px;\n            }\n            .heroes li.selected:hover {\n              background-color: #BBD8DC !important;\n              color: white;\n            }\n            .heroes li:hover {\n              color: #607D8B;\n              background-color: #DDD;\n              left: .1em;\n            }\n            .heroes .text {\n              position: relative;\n              top: -3px;\n            }\n            .heroes .badge {\n              display: inline-block;\n              font-size: small;\n              color: white;\n              padding: 0.8em 0.7em 0 0.7em;\n              background-color: #607D8B;\n              line-height: 1em;\n              position: relative;\n              left: -1px;\n              top: -4px;\n              height: 1.8em;\n              margin-right: .8em;\n              border-radius: 4px 0 0 4px;\n            }\n          "],
        //this tells Angular to create a fresh instance of the service, when it creates an AppComponent
        providers: [hero_service_1.HeroService],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//heroes: Hero[];
//# sourceMappingURL=app.component.js.map