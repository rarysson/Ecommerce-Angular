import { Component, OnInit } from '@angular/core';
import { categories } from '../product';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.css']
})
export class CategoriesFilterComponent implements OnInit {
  categories: string[] = categories;

  constructor() { }

  ngOnInit(): void { }
}
