import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormArray } from '@angular/forms';  // we get NgModel from this
import { HeroDetailComponent } from './hero-detail.component'

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule  //import befor FormsModule before binding with [(ngModel)] 
],
  // A component must be declared in a module before other components can reference it
  declarations: [ AppComponent, HeroDetailComponent ],  //this array contains a list of application components, pipes, and directives that belong to the module
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
