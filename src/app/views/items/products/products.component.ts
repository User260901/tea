import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../../core/services/products.service';
import {ProductsType} from '../../../../types/products.type';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  standalone: false
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductsType[] = []
  text: string = 'Наши чайные коллекции'
  loader: boolean = false;
  private subscription: Subscription[] = [];

  constructor(private productsService: ProductsService, ) {
  }

  ngOnInit() {
    const searchSub = this.productsService.orderSubject.subscribe(value => {
      this.loader = true;
      this.products = []
      if (value) {
        this.productsService.getExactProduct(value).subscribe(data => {
          this.loader = false;
          if (data && data.length > 0) {
            this.text = `Результаты поиска по запросу "${value}"`
            this.products = data
          } else {
            this.text = 'Ничего не найдено'
          }
        })
      } else {
        this.productsService.getProducts().subscribe(data => {
          this.loader = false;
          this.products = data
          this.text = 'Наши чайные коллекции'
        })
      }

    })
    this.subscription.push(searchSub)

    const productsSub = this.productsService.getProducts().subscribe(data => {
      this.loader = true;
      this.products = data
      this.loader = false;
    })
    this.subscription.push(productsSub)

  }

  ngOnDestroy() {
    this.subscription.forEach((sub: Subscription) => {
      sub.unsubscribe()
    })
  }

}

