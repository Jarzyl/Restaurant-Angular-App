import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { ShopService } from 'src/app/services/Shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private shopService: ShopService) {}

  cart: Cart = { items: [] };

  ngOnInit(): void {
    this.shopService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
