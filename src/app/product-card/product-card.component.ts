import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Size } from '../models/size.model';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: `./product-card.component.html`,
  styles: []
})
export class ProductCardComponent implements OnInit {
  @Input() myProduct!: Product;
  value: number = 3000;
  cartItemCount: number = 0;
  
  constructor(private cartService: CartService) { }
  
  ngOnInit() {
    const storedCartItemCount = localStorage.getItem('cartItemCount');
    if (storedCartItemCount) {
      this.cartItemCount = parseInt(storedCartItemCount, 10);
    }
  }

  SizeSelected(e: any) {
    this.value = e.target.value;
  }

  onAddLike() {
    if (this.myProduct.isLiked == false) {
      this.myProduct.likes++;
      this.myProduct.isLiked = true;
    } else {
      this.myProduct.likes--;
      this.myProduct.isLiked = false;
    }
  }

  addToCart() {
    this.cartItemCount++;
    // Stocker la valeur mise à jour de cartItemCount dans le local storage
    localStorage.setItem('cartItemCount', this.cartItemCount.toString());
    console.log("Produit ajouté au panier :", this.myProduct);
  }
}
