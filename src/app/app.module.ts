import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopingAddProductComponent } from './shoping-add-product/shoping-add-product.component';
import { ShopCartViewComponent } from './shop-cart-view/shop-cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopingAddProductComponent,
    ShopCartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
