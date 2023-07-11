import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { ProductTwo } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/Shop.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        id: 1,
        title: 'Onigiri',
        subtitle: 'Japanese Dish',
        price: 10.99,
        imageSrc: '../../assets/img/popular-onigiri.png',
        quantity: 1,
      },
      {
        id: 2,
        title: 'Spring Rolls',
        subtitle: 'Japanese Dish',
        price: 15.99,
        imageSrc: '../../assets/img/popular-spring-rols.png',
        quantity: 1,
      },
      {
        id: 3,
        title: 'Sushi Rolls',
        subtitle: 'Japanese Dish',
        price: 19.99,
        imageSrc: '../../assets/img/popular-sushi-rolls.png',
        quantity: 1,
      },
    ],
    // total: '0',
  };

  dataSource: Array<CartItem> = [];

  ngOnInit(): void {
    this.shopService.cart.subscribe((_cart) => {
      console.log('Cart updated:', _cart);
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  displayedColumns: Array<string> = [
    'imageSrc',
    'title',
    'price',
    'subtitle',
    'quantity',
    'total',
    'action',
  ];

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
