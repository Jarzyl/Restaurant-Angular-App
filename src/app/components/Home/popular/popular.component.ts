import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductTwo } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/Shop.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit, OnDestroy {
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
      price: product.price,
      quantity: 1,
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      imageSrc: product.imageSrc,
      category: product.category,
    });
    console.log('Product added to cart:', product);
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

  // constructor(private scrollRevealService: ScrollRevealService) {}

  // ngOnInit() {
  //   this.scrollRevealService.reveal('.card', {
  //     duration: 2500,
  //     origin: 'top',
  //     distance: '60px',
  //     delay: 400,
  //     interval: 100,
  //   });
  // }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
