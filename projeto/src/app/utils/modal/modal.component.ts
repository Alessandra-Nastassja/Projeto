import { Component, OnInit } from '@angular/core';

import { FeedService } from "../../feed/feed.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [FeedService]
})
export class ModalComponent implements OnInit {

  idProduto: []
  infoComida = []

  constructor(private feedService: FeedService) { }

  ngOnInit() {
  }

  getInfoFood(_idProduto) {
    this.idProduto = _idProduto.target.id;

    this.feedService.getInfoFood(this.idProduto).subscribe(
      success => {
        this.infoComida = success

        console.warn(this.infoComida);

      }
    )
  }

}
