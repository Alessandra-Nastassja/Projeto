import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { FoodService } from "../food.service";

@Component({
  selector: 'app-modal-food',
  templateUrl: './modal-food.component.html',
  styleUrls: ['./modal-food.component.scss'],
})
export class ModalFoodComponent implements OnInit, OnChanges {

  @Input() infoComida: any; 
  idProduto: any = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    // this.foodService.emitirComidaCriada.subscribe(

    //   comidaCriada => this.idProduto = comidaCriada
      
    // )
    console.log(this.infoComida);
    
  }

  ngOnChanges(changes){
    // console.log(this.infoComida);
    
    alert('oi')
    
    
    // const { description } = changes.infoComida;
    // console.log(changes.infoComida);
    // console.log(this.infoComida);
    
    
  }

}
