import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from 'src/app/services/cart.service';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule],
  exports: [ProductCardComponent],
  providers: [CartService] 
})
export class ProductCardModule {}
