import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipesService: RecipeService) {}
  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
  recipes: Recipe[];
}
