import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './popular.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ShopService } from 'src/app/services/Shop.service';

@NgModule({
  declarations: [PopularComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [PopularComponent],
  providers: [ShopService] 
})
export class PopularModule {}
