import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonService} from '../../services/common.service';
import {ProductsService} from '../../services/products.service';


@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    FormsModule
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
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
