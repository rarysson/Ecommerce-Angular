import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { categories } from '../product';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.css']
})
export class CategoriesFilterComponent implements OnInit {
  @Output() filter = new EventEmitter();

  categories: string[] = categories;

  constructor() { }

  ngOnInit(): void { }
}
