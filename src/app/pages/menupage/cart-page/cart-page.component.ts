import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { ShopService } from 'src/app/services/Shop.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart: Cart = {
    items: [],
  };

  dataSource: Array<CartItem> = [];

  ngOnInit(): void {
    this.shopService.cart.subscribe((_cart) => {
      console.log('Cart updated:', _cart);
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  constructor(public shopService: ShopService) {}

  getTotal(items: Array<CartItem>): number {
    return this.shopService.getTotal(items);
  }

  onClearCart(): void {
    this.shopService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.shopService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.shopService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.shopService.removeQuantity(item);
  }
}
