import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class RecipeEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://recipe-book-98aeb-default-rtdb.firebaseio.com/recipes.json'
      );
    }),
    map((recipes) =>
      recipes.map((recipe) => {
        return { ...recipe, ingredients: recipe.ingredients ?? [] };
      })
    ),
    map((recipes) => {
      return new RecipesActions.SetRecipes(recipes);
    })
  );

  @Effect({ dispatch: false })
  storeRecipes = this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')), //allow us to merge from another observable into this observable
    switchMap(([actionData, recipesState]) => {
      return this.http.put(
        'https://recipe-book-98aeb-default-rtdb.firebaseio.com/recipes.json',
        recipesState.recipes
      );
    })
  );
}
