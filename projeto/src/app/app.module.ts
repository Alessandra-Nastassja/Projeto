import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { FoodComponent } from './food/food.component';
import { FiltrosComponent } from './utils/filtros/filtros.component';
import { CardComponent } from './utils/card/card.component';
import { BreadcrumbComponent } from './utils/breadcrumb/breadcrumb.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FiltrosComponent,
    CardComponent,
    BreadcrumbComponent,
    FoodComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
