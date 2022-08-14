import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // put method to an endpoint in firebase overwrite all data in this endpoint;
    this.http
      .put(
        'https://recipe-book-98aeb-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-book-98aeb-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) =>
          recipes.map((recipe) => {
            return { ...recipe, ingredients: recipe.ingredients ?? [] };
          })
        ),
        tap((recipes) =>
          this.store.dispatch(new RecipesActions.SetRecipes(recipes))
        )
      );
  }
}
