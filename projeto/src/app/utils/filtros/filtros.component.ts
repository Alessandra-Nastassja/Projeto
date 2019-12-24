import { FiltrosService } from "./filtros.service";
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
  providers: [FiltrosService]
})
export class FiltrosComponent implements OnInit {

  comidas = []
  categorias = []
  idCategoria: number

  constructor(private filtrosService: FiltrosService) {
    
  }

  ngOnInit() {
    this.getCategories()
  }

  getCategories(){
    this.filtrosService.getCategory().subscribe(
      success => {
        this.categorias = success

        // console.warn(this.categorias);
      }
    )
  }

  getIdProduto(event){
    this.idCategoria = event.target.id
    
    this.getFilterCategory(this.idCategoria)
  }

  getFilterCategory(event){
    this.filtrosService.getFilterCategories(event).subscribe(
      success => {
        this.comidas = success

        console.warn(this.comidas);
      }
    )
  }

}
