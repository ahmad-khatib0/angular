import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 4),
    new Ingredient('tomatoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    //  for(let ingredient of ingredients ) {
    //   this.ingredients.push(ingredient)
    // } // inefficient
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
