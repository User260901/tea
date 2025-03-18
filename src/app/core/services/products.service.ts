import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsType} from '../../../types/products.type';
import {OrderFormType} from '../../../types/order-form.type';
import {CommonService} from './common.service';
import {Subject} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  orderSubject = new Subject<string>();

  constructor(private _http: HttpClient, private _commonService: CommonService) {}

  getProducts() {
    return this._http.get<ProductsType[]>( environment.apiUrl + 'tea')
  }

  getProduct(id:string){
    return this._http.get<ProductsType>( environment.apiUrl + 'tea?id=' + id)
  }

  sendProduct(formInfo: OrderFormType){
    const config = {
      name: formInfo.name,
      last_name: formInfo.lastName,
      phone: formInfo.phone,
      country: formInfo.country,
      zip: formInfo.index,
      product: this._commonService.orderInfo,
      address: formInfo.address,
      comment: formInfo.commentary
    }
    return this._http.post<{ success: number, message?:string}>( environment.apiUrl + 'order-tea', config)
  }

  getExactProduct(product:string){
    return this._http.get<ProductsType[] | []>(environment.apiUrl + 'tea?search=' + product)
  }
}
