import { Product } from 'src/app/product.model';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  deleteProduct(productId: any) {
    // Implement delete functionality
    console.log('Deleting product:', productId);
    this.productService.deleteProduct(productId);
  }
}
