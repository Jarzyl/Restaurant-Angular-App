import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductTwo } from '../models/product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  // Store api test

  // getAllProducts(
  //   limit = '12',
  //   sort = 'desc',
  //   category?: string
  // ): Observable<Array<ProductTwo>> {
  //   return this.httpClient.get<Array<ProductTwo>>(
  //     `${STORE_BASE_URL}/products${
  //       category ? '/category/' + category : ''
  //     }?sort=${sort}&limit=${limit}`
  //   );
  // }

  // getAllCategories(): Observable<Array<string>> {
  //   return this.httpClient.get<Array<string>>(
  //     `${STORE_BASE_URL}/products/categories`
  //   );
  // }

  private menuUrl = 'assets/menu.json';

  getMenuItems(): Observable<ProductTwo[]> {
    return this.http.get<ProductTwo[]>(this.menuUrl);
  }
}