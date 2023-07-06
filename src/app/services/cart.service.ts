import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cartItems';

  addToCart(product: Product): void {
    const cartItems = this.getCartItems();
    cartItems.push(product);
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  removeFromCart(product: Product): void {
    const cartItems = this.getCartItems();
    const updatedCartItems = cartItems.filter(item => item.id !== product.id);
    localStorage.setItem(this.cartKey, JSON.stringify(updatedCartItems));
  }

  getCartItems(): Product[] {
    const cartItemsString = localStorage.getItem(this.cartKey);
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  }
}
