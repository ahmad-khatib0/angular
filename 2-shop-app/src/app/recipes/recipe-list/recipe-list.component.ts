import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  constructor(
    private recipesService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
  recipes: Recipe[];

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
