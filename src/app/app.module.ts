import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerApp } from './myContainer/myContainer.component';
import { TopVarComponent } from './myContainer/top-var/top-var.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { CardsComponent } from './myContainer/cards/cards.component';
import { TextSec2Component } from './myContainer/text-sec2/text-sec2.component';
import { TextSecComponent } from './myContainer/text-sec/text-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerApp,
    TopVarComponent,
    HeaderComponent,
    CardsComponent,
    TextSec2Component,
    TextSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
