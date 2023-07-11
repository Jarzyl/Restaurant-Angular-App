import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ProductCardModule } from '../../components/product-card/product-card.module'

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, ProductCardModule],
  exports: [MenuComponent]
})
export class MenuModule { }
