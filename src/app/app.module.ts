import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';
import {RouterOutlet} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {OrderModule} from './views/order/order.module';
import {ItemsModule} from './views/items/items.module';
import {HomeModule} from './views/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterOutlet,
    SharedModule,
    OrderModule,
    ItemsModule,
    HomeModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()]
})

export class AppModule {}
