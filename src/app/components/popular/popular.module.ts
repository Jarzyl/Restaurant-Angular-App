import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './popular.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from 'src/app/services/cart.service';

@NgModule({
  declarations: [PopularComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [PopularComponent],
  providers: [CartService] 
})
export class PopularModule {}
