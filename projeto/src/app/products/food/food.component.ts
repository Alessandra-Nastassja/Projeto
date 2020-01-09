import { FoodService } from "./food.service";
import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  providers: [FoodService]
})
export class FoodComponent implements OnInit {

  @Input() comidas = [];
  infoComida = [];
  idProduto: [];
  isLoading = true;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFood();
  }

  getFood() {
    setTimeout(() => {
      this.foodService.getFood()
        .finally(() => this.isLoading = false)
        .subscribe(
          success => {

            this.comidas = success
          }
        )
    }, 500);
  }

  getInfoFood(_idProduto) {
    this.idProduto = _idProduto.target.id;

    this.foodService.getInfoFood(this.idProduto).subscribe(
      success => {
        this.infoComida = success

      }
    )
  }

}
