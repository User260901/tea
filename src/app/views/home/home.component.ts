import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';


declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent implements OnInit, OnDestroy{
  public showPopup: boolean = false
  private observable: Observable<boolean>;
  private subscription!: Subscription;

  constructor() {
    this.observable = new Observable(observer => {
      let timeOut = setTimeout(() => {
        observer.next(true);
      },10000)
      return ()=> clearTimeout(timeOut)
    })
  }

  ngOnInit() {
    $("#accordion").accordion();
    this.subscription = this.observable.subscribe((value) => {
      this.showPopup = value;
    })
  }

  cancel() {
    this.showPopup = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
