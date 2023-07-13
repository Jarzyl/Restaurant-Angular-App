import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductTwo } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  private menuUrl = 'assets/menu.json';

  getMenuItems(): Observable<ProductTwo[]> {
    return this.http.get<ProductTwo[]>(this.menuUrl);
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<ProductTwo[]>(this.menuUrl).pipe(
      map((products) => {
        const categories = products.map((product) => product.category);
        return Array.from(new Set(categories));
      })
    );
  }
}