import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'test',
      'this is test description 1',
      'https://thumbs.dreamstime.com/z/chef-recipe-box-2270380.jpg',
      [new Ingredient('Buns', 1), new Ingredient('Meet', 4)]
    ),
    new Recipe(
      'test',
      'this is test description 2',
      'https://thumbs.dreamstime.com/z/chef-recipe-box-2270380.jpg',
      [new Ingredient('fish', 1), new Ingredient('yummy', 4)]
    ),
    new Recipe(
      'test',
      'this is test description 3',
      'https://thumbs.dreamstime.com/z/chef-recipe-box-2270380.jpg',
      [new Ingredient('meet', 1), new Ingredient('Eggs', 4)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
