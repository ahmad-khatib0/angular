import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    // only continue in this observable chain only of action we're reacting with ofType LOGIN_START ;
    switchMap((authData: AuthActions.LoginStart) => {
      //switchMap allow us to create new observable by taking another observables data ;
      return this.http
        .post<AuthResponseData>(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
            environment.firebaseAPIKey,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true,
          }
        )
        .pipe(
          map((resData) => {
            const expirationDate = new Date(
              new Date().getTime() + +resData.expiresIn * 1000
            );
            return new AuthActions.Login({
              email: resData.email,
              userId: resData.localId,
              token: resData.idToken,
              expirationDate: expirationDate,
            });
          }),
          catchError((errorResponse) => {
            //here we've to return a non-error observable, so this observable tree won't die, of() creates a new observable without error
            // in the mpa operator we didn't create an of() observable, because map will create it instead, but catchError won't,
            let errorMessage = 'an unknown error occurred  ';
            if (!errorResponse.error || !errorResponse.error.error)
              return of(new AuthActions.LoginFail(errorMessage));
            switch (errorResponse.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'this email is in use';
                break;
              case 'EMAIL_NOT_FOUND':
                errorMessage = "this email dose'nt exist";
                break;
              case 'INVALID_PASSWORD':
                errorMessage = 'this password is not correct';
                break;
            }
            return of(new AuthActions.LoginFail(errorMessage));
          })
        );
    })
    // catchError() if you handle catchError, this entire observable tree will die and won't run on retry to login
  );

  @Effect({ dispatch: false })
  // because action is required in effects, and here we didn't make an action
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    tap(() => this.router.navigate(['/']))
  );
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
