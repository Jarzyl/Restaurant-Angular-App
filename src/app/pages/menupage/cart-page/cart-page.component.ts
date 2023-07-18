import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { ShopService } from 'src/app/services/Shop.service';
import { environment } from 'src/environments/environment';

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
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  constructor(public shopService: ShopService, public http: HttpClient) {}

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

  onCheckout(): void {
    this.http
      .post('https://sushi-restaurant-angular-app-git-work-halt1x.vercel.app/checkout', {
        items: this.dataSource,
      })
      .subscribe(async (res: any) => {
        const stripe = await loadStripe(environment.STRIPE_PUBLIC_KEY);
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}
