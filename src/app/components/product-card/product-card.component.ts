import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ScrollRevealService } from 'src/app/services/scrollreveal.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
  @Input() id!: number;
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() price!: string;
  @Input() quantity!: number;
  @Input() cartService: CartService = {} as CartService;

  addToCart(): void {
    const product: Product = {
      id: this.id,
      title: this.title,
      subtitle: this.subtitle,
      price: this.price,
      imageSrc: this.imageSrc,
      quantity: this.quantity
    };
    console.log('Adding to cart:', product);
    this.cartService.addToCart(product);
  }

  constructor(private scrollRevealService: ScrollRevealService) {}

  ngOnInit() {
    this.scrollRevealService.reveal('.card', {
      duration: 2500,
      origin: 'top',
      distance: '60px',
      delay: 400,
      interval: 500,
    });
  }
}
