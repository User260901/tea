import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from './order.component';
import {accessGuardGuard} from '../../core/guards/access-guard.guard';

const routes: Routes = [
  {path: 'order', component: OrderComponent, canActivate: [accessGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
