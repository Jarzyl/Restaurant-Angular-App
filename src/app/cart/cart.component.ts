import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isCartOpen = false;
  cartItems: Product[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    this.cartItems = this.cartService.getCartItems();
  }

  closeCart() {
    this.isCartOpen = false;
  }
}
