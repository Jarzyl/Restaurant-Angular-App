import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductTwo } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/Shop.service';
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
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() shopService: ShopService = {} as ShopService;

  // onAddToCart(product: ProductTwo): void {
  //   this.shopService.addToCart({
  //     price: product.price,
  //     quantity: 1,
  //     id: product.id,
  //     title: product.title,
  //     subtitle: product.subtitle,
  //     imageSrc: product.imageSrc,
  //   });
  // }

  product: ProductTwo | undefined = {
    
    id: 1,
    title: 'Snickers',
    price: 10,
    subtitle: "Baaton",
    category: 'sushi',
    imageSrc: '../../assets/img/popular-sushi-rolls.png'
  }

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  // constructor(private scrollRevealService: ScrollRevealService) {}

  // ngOnInit() {
  //   this.scrollRevealService.reveal('.card', {
  //     duration: 2500,
  //     origin: 'top',
  //     distance: '60px',
  //     delay: 400,
  //     interval: 500,
  //   });
  // }

}
