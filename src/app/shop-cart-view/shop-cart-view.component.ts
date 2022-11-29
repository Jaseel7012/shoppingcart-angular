import { Component } from '@angular/core';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-shop-cart-view',
  templateUrl: './shop-cart-view.component.html',
  styleUrls: ['./shop-cart-view.component.css']
})
export class ShopCartViewComponent {
 constructor(private api:ProductApiService){
  api.fetchProduct().subscribe(
    (response)=>{
      this.products=response

    }
  )

 }


 products:any= []
}