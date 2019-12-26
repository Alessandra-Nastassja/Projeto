import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodComponent } from "./food/food.component";
import { Error404Component } from "./error404/error404.component";

const routes: Routes = [
  { path: 'alimentos', component: FoodComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
