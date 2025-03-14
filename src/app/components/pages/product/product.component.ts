import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {ProductsType} from '../../../../types/products.type';
import {CurrencyPipe} from '@angular/common';
import {CommonService} from '../../../services/common.service';
import {GrantAccessService} from '../../../services/grant-access.service';

@Component({
  selector: 'app-product',
  imports: [
    CurrencyPipe
  ],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  product: ProductsType = {} as ProductsType;

  constructor(private _productsService: ProductsService,
              private _route: ActivatedRoute,
              private _commonService: CommonService,
              private _router: Router,
              private _grantAccess: GrantAccessService)   {
  }

  ngOnInit() {

    this._route.params.subscribe(params => {
      if(params['id']) {
        this._productsService.getProduct(params['id']).subscribe(value => {
          this.product = value
        })
      }
    })
  }

  orderPage(){
    this._grantAccess.access = true
    this._commonService.orderInfo = this.product.title
    this._router.navigate(['order'])
  }
}
