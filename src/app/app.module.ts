import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopingAddProductComponent } from './shoping-add-product/shoping-add-product.component';
import { ShopCartViewComponent } from './shop-cart-view/shop-cart-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewliveComponent } from './viewlive/viewlive.component';
import {HttpClientModule} from '@angular/common/http'
const myroute:Routes=
[
  {path:'',
  'component':ShopingAddProductComponent
},
{
  path:'view',
  'component':ShopCartViewComponent
},
{
  path:'view2',
  'component':ViewliveComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    ShopingAddProductComponent,
    ShopCartViewComponent,
    NavbarComponent,
    ViewliveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
