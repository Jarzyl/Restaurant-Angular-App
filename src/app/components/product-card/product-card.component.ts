import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

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
  @Input() cartService: CartService = {} as CartService;

  addToCart(): void {
    const product: Product = {
      id: this.id,
      title: this.title,
      subtitle: this.subtitle,
      price: this.price,
      imageSrc: this.imageSrc
    };
    this.cartService.addToCart(product);
  }
}
