import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingCmpArray } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducttypeComponent } from './producttype/producttype.component';


@NgModule({
  declarations: [
    AppComponent,
    routingCmpArray,
    ProducttypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
