// product.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  newProduct: any = {};
  selectedProduct: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('http://localhost:3000/api/products').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addProduct() {
    this.http.post<any>('http://localhost:3000/api/products', this.newProduct).subscribe(
      (data) => {
        this.products.push(data);
        this.newProduct = {};
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }

  updateProduct() {
    this.http
      .put<any>(`http://localhost:3000/api/products/${this.selectedProduct.id}`, this.selectedProduct)
      .subscribe(
        (data) => {
          const index = this.products.findIndex((p) => p.id === data.id);
          this.products[index] = data;
          this.selectedProduct = {};
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
  }

  deleteProduct(id: number) {
    this.http.delete(`http://localhost:3000/api/products/${id}`).subscribe(
      () => {
        this.products = this.products.filter((p) => p.id !== id);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
