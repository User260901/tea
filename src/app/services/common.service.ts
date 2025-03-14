import { Injectable } from '@angular/core';
import {ProductsType} from '../../types/products.type';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  orderInfo: string = '';

  constructor() {}
}
