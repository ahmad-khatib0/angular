import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  recipes: Recipe[] = [
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

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
