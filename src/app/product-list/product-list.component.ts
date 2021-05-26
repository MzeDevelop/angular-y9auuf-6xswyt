import { Component } from '@angular/core';

import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../css_Style/productListAlertStyle.css']
})
export class ProductListComponent {
  products = this.productService.getProducts();

constructor(private productService: ProductService){

}

  share() {
    window.alert('Das Product wurde geteilt!');
  }

  onNotify() {
    window.alert(
      'Du wirst sofort benarichtigt wenn das Produkt wieder verfügbar ist!'
    );
  }

  ngOnInit() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
