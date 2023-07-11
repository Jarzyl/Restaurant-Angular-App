import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent  {
  @Output() showCategory = new EventEmitter<string>();

  constructor(private storeService: StoreService) {}

  // categoriesSubscription: Subscription | undefined;

  // ngOnInit(): void {
  //   this.categoriesSubscription = this.storeService.getAllCategories().subscribe((response) => {
  //     this.categories = response;
  //   });
  // }

  categories = ['sushi', 'pizza'];

  // categories: Array<string> | undefined;

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  // ngOnDestroy(): void {
  //   if (this.categoriesSubscription) {
  //     this.categoriesSubscription.unsubscribe();
  //   }
  // }
}
