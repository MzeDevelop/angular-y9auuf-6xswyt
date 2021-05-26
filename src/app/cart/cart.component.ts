import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', '../css_Style/productListAlertStyle.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  totalPrice: number;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Die Bestellung wurde aufgegeben!', this.checkoutForm.value);
    alert('Die Bestellung wurde aufgegeben!');
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.totalPrice = this.cartService.getPrice();
  }
}
