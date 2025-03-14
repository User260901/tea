import { Routes } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {ProductsComponent} from './components/pages/products/products.component';
import {OrderComponent} from './components/pages/order/order.component';
import {ProductComponent} from './components/pages/product/product.component';
import {accessGuardGuard} from './guards/access-guard.guard';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'order', component: OrderComponent, canActivate: [accessGuardGuard]},
];
