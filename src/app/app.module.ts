import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormArray } from '@angular/forms';  // we get NgModel from this

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule  //import befor FormsModule before binding with [(ngModel)] 
],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
