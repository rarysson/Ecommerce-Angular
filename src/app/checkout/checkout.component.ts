import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  cartItems() {
    return this.cartService.getOrganizedItems();
  }

  buy() {
    this.cartService.clearCart();
  }

  totalPrice() {
    return this.cartItems().reduce((acc, value) => acc + value.price, 0);
  }
}
