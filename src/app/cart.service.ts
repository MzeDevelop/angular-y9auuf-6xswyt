import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable()
export class CartService {
  items: Product[] = [];
  totalPrice: number = 0;
  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  setCartSum(addedPrice: number) {
    this.totalPrice += addedPrice;
  }

  getItems() {
    return this.items;
  }

  getPrice() {
    return this.totalPrice;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
