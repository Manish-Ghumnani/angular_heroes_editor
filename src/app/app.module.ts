//module imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormArray } from '@angular/forms';  // we get NgModel from this
import { HeroDetailComponent } from './hero-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HeroSearchComponent } from './hero-search.component';

//Imports for loading & configuring the in-memory web api
//rather that using a real server we will use the in memory web api alternative which simulates the web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//component imports
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component'

@NgModule({
  //until you put the module in this array, it won't be visible to other components
  imports:      [ BrowserModule, 
                  FormsModule//import befor FormsModule before binding with [(ngModel)] 
                  ,AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)
  //commmented after all routing configurations were moved to the app-routing module
  // //forRoot is called becaues a configured router is provided at the app's root - it performs the initial navigation
  // //it is passed the array which contains the paths and components which define the routes
  // RouterModule.forRoot([
  //   {
  //     //this is what the default path should redirect to when the app is first launched
  //     path: '',
  //     redirectTo: '/dashboard',
  //     pathMatch: 'full'
  //   }
  //   ,{
  //     //the path that should be matche in the url 
  //     path: 'heroes',
  
  //     //the component that the router should create while naviagating to this path
  //     component: HeroesComponent
  //   },
  //   {
  //     path: 'dashboard',
  //     component: DashboardComponent
  //   },
  //   //to navigate to a specific hero, we need a placeholder and this is how the syntax looks like for that 
  //   {
  //     path: 'detail/:id',
  //     component: HeroDetailComponent
  //   }
  // ])
],
  // A component must be declared in a module before other components can reference it
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent ],  //this array contains a list of application components, pipes, and directives that belong to the module
  bootstrap:    [ AppComponent ],
  
  //this tells Angular to create a fresh instance of the service, when it creates an AppComponent
  //being in the ngModule, means this is a singleton instance
  providers: [HeroService]
})



export class AppModule { }
