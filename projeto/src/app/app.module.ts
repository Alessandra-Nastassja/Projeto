import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { FeedComponent } from './feed/feed.component';
import { ModalComponent } from './utils/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    ModalComponent,
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
