import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [    
  { path: "", component: ProductCardComponent },
  { path: "cart", component: CartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
