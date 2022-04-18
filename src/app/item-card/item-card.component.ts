import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
