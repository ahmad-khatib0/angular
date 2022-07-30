import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'test',
      'this is test description 1',
      'https://thumbs.dreamstime.com/z/chef-recipe-box-2270380.jpg'
    ),
    new Recipe(
      'test',
      'this is test description 2',
      'https://thumbs.dreamstime.com/z/chef-recipe-box-2270380.jpg'
    ),
    new Recipe(
      'test',
      'this is test description 3',
      'https://thumbs.dreamstime.com/z/chef-recipe-box-2270380.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  recipeSelected = new EventEmitter<Recipe>();
}
