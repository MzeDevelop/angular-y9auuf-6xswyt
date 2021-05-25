import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  productCount: number = 1;
  cartPrice: number;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addCount() {
    if (this.product.availableCount > this.productCount) this.productCount++;
    this.cartPrice = this.product.price * this.productCount;
  }
  removeCount() {
    if (this.productCount > 1) this.productCount--;
    this.cartPrice = this.product.price * this.productCount;
  }

  addToCart(product: Product) {
    if (this.product.availableCount > 0) {
      this.product.CartCount = this.productCount;
      this.cartService.addToCart(product);
      this.cartService.setCartSum(this.cartPrice);
      window.alert('Zum Einkaufswagen hinzugefügt!');
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id == productIdFromRoute);
    this.cartPrice = this.product.price;
  }
}
