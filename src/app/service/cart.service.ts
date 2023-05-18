import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCartItems(): string[] {
    throw new Error('Method not implemented.');
  }
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  constructor() { }

  incrementCartItemCount() {
    const currentCount = this.cartItemCountSubject.value;
    this.cartItemCountSubject.next(currentCount + 1);
  }

  setCartItemCount(count: number) {
    this.cartItemCountSubject.next(count);
  }
}
