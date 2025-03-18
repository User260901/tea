import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import {ProductComponent} from './product/product.component';
import {ProductsComponent} from './products/products.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [ProductComponent, ProductsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
