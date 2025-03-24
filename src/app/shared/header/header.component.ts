import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService} from '../../core/services/products.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent {
  searchInput: string = ''
  constructor(private _router:Router, private _productService: ProductsService) {
  }

  findTea(){
    this._productService.orderSubject.next(this.searchInput);
  }

  onClear(){
    this.searchInput = ''
      this._productService.orderSubject.next('')
  }

}
