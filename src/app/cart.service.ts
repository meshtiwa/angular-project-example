// CartService: a service that can be used by other components
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = []; //items property to store the array of current products in the cart
  constructor() {}
  addToCart(product: Product) {
    this.items.push(product); //appends the product that we want to add to the shopping cart to the items list
  }
  getItems() {
    return this.items; //return whats in the shopping cart
  }
  clearCart() {
    this.items = []; //set items to an empty array (basically clears the entire cart)
    return this.items;
  }
}
