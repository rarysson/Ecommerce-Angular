import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  totalItemsOnCart(): number {
    return this.cartService.getItems().length;
  }

  itemsOnCart() {
    return this.cartService.getOrganizedItems();
  }

  totalPrice(): number {
    return this.itemsOnCart().reduce((acc, value) => acc + value.price, 0);
  }
}
