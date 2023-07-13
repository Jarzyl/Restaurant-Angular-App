import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { ShopService } from 'src/app/services/Shop.service';


@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule],
  exports: [ProductCardComponent],
  providers: [ShopService] 
})
export class ProductCardModule {}
