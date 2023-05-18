import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { Size } from './models/size.model';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  products!: Product[];
  search: string = '';
  filteredProducts: Product[] = [];

  constructor(private productsServices: ProductsService) {}

  ngOnInit() {
    this.search = '';
    this.products = this.productsServices.getAllProducts();
    this.filterProducts();
  }

  onSearchInput(search: string) {
    this.search = search;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product: Product) =>
      product.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}