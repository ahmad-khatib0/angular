import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}
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
    this.dataStorageService.storeRecipes();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
