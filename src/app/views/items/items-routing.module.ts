import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
