import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems(); //returns the products that have been added to the cart (or "items"  from cart.service.ts)

  constructor(private cartService: CartService) {
    //injecting CartService in constructor so we can use cartService in this component
  }

  ngOnInit(): void {}
}
