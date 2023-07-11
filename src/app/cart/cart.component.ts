import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { ShopService } from '../services/Shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  isCartOpen = false;

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart() {
    this.isCartOpen = false;
  }

  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  constructor(public shopService: ShopService) {}

  getTotal(items: Array<CartItem>): number {
    return this.shopService.getTotal(items);
  }

  onClearCart(): void {
    this.shopService.clearCart();
  }
}
