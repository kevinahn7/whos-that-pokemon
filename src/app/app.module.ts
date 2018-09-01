import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GenerationsComponent } from './generations/generations.component';
import { DisplayComponent } from './display/display.component';
import { InterfaceComponent } from './interface/interface.component';


@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    DisplayComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
