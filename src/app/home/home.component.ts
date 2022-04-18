import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = products;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  onFilter(category: string) {
    this.products = category === 'all'
      ? products
      : products.filter(product => product.categories.includes(category));
  }
}
