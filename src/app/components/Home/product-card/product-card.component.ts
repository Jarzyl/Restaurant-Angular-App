import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductTwo } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/Shop.service';
import { ScrollRevealService } from 'src/app/services/scrollreveal.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: ProductTwo | undefined;
  @Output() addToCart = new EventEmitter();

  @Input() id!: number;
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() category!: string;
  @Input() shopService: ShopService = {} as ShopService;

  onAddToCart(): void {
    this.addToCart.emit(this.product);
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
