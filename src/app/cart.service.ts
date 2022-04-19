import { Injectable } from '@angular/core';
import { Product } from './product';

interface CartItem {
  name: string;
  qnt: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  getOrganizedItems() {
    const items = this.items.reduce((acc, value) => {
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
}
