import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

interface CartItem {
  name: string;
  qnt: number;
  price: number;
}

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

  itemsOnCart(): CartItem[] {
    const items = this.cartService.getItems().reduce((acc, value) => {
      if (!acc[value.name]) {
        acc[value.name] = {
          name: value.name,
          qnt: 1,
          price: value.price
        }
      } else {
        acc[value.name].qnt++;
        acc[value.name].price += value.price;
      }

      return acc;
    }, {} as Record<string, CartItem>);

    return Object.values(items);
  }

  totalPrice(): number {
    return this.itemsOnCart().reduce((acc, value) => acc + value.price, 0);
  }
}
