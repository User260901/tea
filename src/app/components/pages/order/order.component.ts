import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../services/common.service';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {ProductsService} from '../../../services/products.service';


@Component({
  selector: 'app-order',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit{
  showForm: boolean = true;
  requestError: boolean = false;
  orderTitle: string
  orderForm: FormGroup

  constructor(private _commonService: CommonService, private _fb: FormBuilder, private _productService: ProductsService) {
    this.orderTitle = this._commonService.orderInfo

    this.orderForm = this._fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]),
      country: new FormControl('', [Validators.required]),
      index: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ0-9][a-zA-Zа-яА-ЯёЁ0-9\\s\\-\\/]*$')]),
      product: new FormControl({value: this.orderTitle, disabled: true}, [Validators.required]),
      commentary: new FormControl('', ),

    })
  }

  ngOnInit() {

  }
  submitForm(){
    // this.orderForm.get('product')?.enable()

    this._productService.sendProduct(this.orderForm.value).subscribe(value => {
      if(value.success === 1){
        this.showForm = false
      }else {
        this.requestError = true
      }
    })

  }
}
