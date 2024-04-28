import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { products } from './data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = products;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  editProduct(product: Product): void {
    // Implementation to edit product
  }

  deleteProduct(productId: number): void {
    // Implementat
    products.map((product, index) => {
      if (product.id === productId) {
        products.splice(index, 1);
      }
    });
    console.log('pro', products);
  }
}
