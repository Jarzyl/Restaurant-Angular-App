import { Component } from '@angular/core';
import { ScrollRevealService } from 'src/app/services/scrollreveal.service';
import { ShopService } from 'src/app/services/Shop.service';
import { ProductTwo } from 'src/app/models/product.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  // cartService: CartService = new CartService;

  constructor(public shopService: ShopService) {}

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

  popularProducts = [
    {
      id: 1,
      title: 'Onigiri',
      subtitle: 'Japanese Dish',
      price: 10.99,
      imageSrc: '../../assets/img/popular-onigiri.png',
      category: 'sushi'
    },
    {
      id: 2,
      title: 'Spring Rolls',
      subtitle: 'Japanese Dish',
      price: 15.99,
      imageSrc: '../../assets/img/popular-spring-rols.png',
      category: 'sushi'
    },
    {
      id: 3,
      title: 'Sushi Rolls',
      subtitle: 'Japanese Dish',
      price: 19.99,
      imageSrc: '../../assets/img/popular-sushi-rolls.png',
      category: 'sushi'
    }
  ];

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
}
