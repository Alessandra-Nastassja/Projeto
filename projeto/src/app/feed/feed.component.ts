import { FeedService } from "./feed.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [FeedService]
})
export class FeedComponent implements OnInit {

  infoComida = []
  comidas = []
  idProduto: number;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getFood();
  }

  getFood(){
    this.feedService.getFood().subscribe(
      success =>{
        this.comidas = success       
      }
    )
  }

  getInfoFood(_idProduto){
    this.idProduto = _idProduto.target.id;

    this.feedService.getInfoFood(this.idProduto).subscribe(
      success => {
        this.infoComida = success

        console.log(this.infoComida);
        
      }
    )
  }
  
}
