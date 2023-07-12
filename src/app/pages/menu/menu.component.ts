import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductTwo } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/Shop.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  category = '';
  products: Array<ProductTwo> | undefined;
  productsSubscription: Subscription | undefined;

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    // this.getProducts();
  }
  constructor(
    public shopService: ShopService,
    private storeService: StoreService
  ) {}

  onAddToCart(product: ProductTwo): void {
    this.shopService.addToCart({
      quantity: 1,
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      price: product.price,
      imageSrc: product.imageSrc,
      category: product.category,
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService
      .getMenuItems()
      .subscribe((products) => {
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
