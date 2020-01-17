import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodService } from "./food.service";

import { FoodComponent } from "./food.component";
import { ModalFoodComponent } from "./modal-food/modal-food.component";

@NgModule({
  declarations: [
    FoodComponent,
    ModalFoodComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ModalFoodComponent]
})
export class FoodModule { }
