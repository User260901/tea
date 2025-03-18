import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {TextShrinkPipe} from './pipes/text-shrink.pipe';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app.routes';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, TextShrinkPipe],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [FooterComponent, HeaderComponent, TextShrinkPipe],
})
export class SharedModule { }
