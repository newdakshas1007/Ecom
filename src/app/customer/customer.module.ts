import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { CartComponent } from './cart/cart.component';
import { ViewOrderComponent } from './view-order/view-order.component';



@NgModule({
  declarations: [
    ViewProductComponent,
    SearchProductsComponent,
    CartComponent,
    ViewOrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
