import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 4),
    new Ingredient('tomatoes', 10),
  ];
}
