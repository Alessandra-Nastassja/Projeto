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
  idProduto: [];
  @Input() infoComida = [];
  isLoading = true;

  constructor(public foodService: FoodService) { }

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

  getInfoFood(_event) {
    console.warn(_event);
    
    this.idProduto = _event.target.id;
    this.foodService.getInfoFood(this.idProduto).subscribe(
      success => {
        this.infoComida = success
        console.warn(this.infoComida);
      }
    )
  }

}
