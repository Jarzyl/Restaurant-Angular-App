import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductTwo } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/Shop.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  category: string | undefined;
  products: Array<ProductTwo> | undefined;
  // count = '12';
  // sort = 'desc';
  // productsSubscription: Subscription | undefined;

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    // this.getProducts();
  }
  constructor(public shopService: ShopService, private storeService: StoreService) {}

  // ngOnInit(): void {
  //   this.getProducts();
  // }

  // getProducts(): void {
  //   this.productsSubscription = this.storeService
  //     .getAllProducts(this.count, this.sort, this.category)
  //     .subscribe((_products) => {
  //       this.products = _products;
  //     });
  // }

  onAddToCart(product: ProductTwo): void {
    this.shopService.addToCart({
      price: product.price,
      quantity: 1,
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      imageSrc: product.imageSrc,
    });
  }

  // cartService: CartService = new CartService();
  popularProducts = [
    {
      id: 1,
      title: 'Onigiri',
      subtitle: 'Japanese Dish',
      price: 10.99,
      imageSrc: '../../assets/img/popular-onigiri.png',
      category: 'shushi',
    },
    {
      id: 2,
      title: 'Spring Rolls',
      subtitle: 'Japanese Dish',
      price: 15.99,
      imageSrc: '../../assets/img/popular-spring-rols.png',
      category: 'sushi',
    },
    {
      id: 3,
      title: 'Sushi Rolls',
      subtitle: 'Japanese Dish',
      price: 19.99,
      imageSrc: '../../assets/img/popular-sushi-rolls.png',
      category: 'sushi',
    },
    {
      id: 3,
      title: 'Sushi Rolls',
      subtitle: 'Japanese Dish',
      price: 19.99,
      imageSrc: '../../assets/img/popular-sushi-rolls.png',
      category: 'sushi',
    },
    {
      id: 3,
      title: 'Sushi Rolls',
      subtitle: 'Japanese Dish',
      price: 19.99,
      imageSrc: '../../assets/img/popular-sushi-rolls.png',
      category: 'sushi',
    },
  ];

  // ngOnDestroy(): void {
  //   if (this.productsSubscription) {
  //     this.productsSubscription.unsubscribe();
  //   }
  // }
}
