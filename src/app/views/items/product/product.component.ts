import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../core/services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsType} from '../../../../types/products.type';
import {CommonService} from '../../../core/services/common.service';
import {GrantAccessService} from '../../../core/services/grant-access.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: false,
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
