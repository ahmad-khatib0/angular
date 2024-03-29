import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private store: Store<fromApp.AppState>) {}
  private userSub: Subscription;
  isAuthenticated = false;

  ngOnInit() {
    this.userSub = this.store
      .select('auth')
      .pipe(map((authData) => authData.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
      });
  }
  onSaveData() {
    this.store.dispatch(new RecipesActions.StoreREcipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
  onFetchData() {
    this.store.dispatch(new RecipesActions.FetchRecipes());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
