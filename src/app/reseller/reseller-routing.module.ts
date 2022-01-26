import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'AddProduct', component: AddProductComponent },
      { path: 'DeleteProduct', component: DeleteProductComponent },
      { path: 'UpdateProduct', component: UpdateProductComponent },
      { path: 'ViewProduct', component: ViewProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
