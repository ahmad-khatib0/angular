import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: Store<fromApp.AppState>) {}
  token: string = null;
  private tokenExpirationTimerId: any;

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimerId = setTimeout(
      () => this.store.dispatch(new AuthActions.Logout()),
      expirationDuration
    );
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimerId) {
      clearTimeout(this.tokenExpirationTimerId);
      this.tokenExpirationTimerId = null;
    }
  }
}
