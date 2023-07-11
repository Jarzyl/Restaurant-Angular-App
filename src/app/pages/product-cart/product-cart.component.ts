import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductTwo } from 'src/app/models/product.model';
import { ShopService } from 'src/app/services/Shop.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {

  //  Old
  product: ProductTwo | undefined = {
    
    id: 1,
    title: 'Snickers',
    price: 10,
    subtitle: "Baaton",
    category: 'sushi',
    imageSrc: '../../assets/img/popular-sushi-rolls.png'
  }

  // New

  // @Input () product: ProductTwo | undefined;

  @Output() addToCart = new EventEmitter();
  @Input() shopService: ShopService = {} as ShopService;

  @Input() id!: number;
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() price!: number;
  @Input() quantity!: number;
  @Input() category!: string;
  // @Input() cartService: CartService = {} as CartService;


  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
