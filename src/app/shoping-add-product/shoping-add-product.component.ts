import { Component } from '@angular/core';

@Component({
  selector: 'app-shoping-add-product',
  templateUrl: './shoping-add-product.component.html',
  styleUrls: ['./shoping-add-product.component.css']
})
export class ShopingAddProductComponent {
 

  pimage=""
  disc=""
  price=""
  sname=""
  qu=""
  view=()=>{
    let data:any={
      'pimage':this.pimage,
      'disc':this.disc,
      'price':this.price,
      'sname':this.sname,
      'qu':this.qu
    }
    console.log(data)
  }
}
