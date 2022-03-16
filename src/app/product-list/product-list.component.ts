import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('ur gonna be notified when the product goes on sale!');
  }
  onSubmit(f: NgForm) {
    window.alert('hi');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
