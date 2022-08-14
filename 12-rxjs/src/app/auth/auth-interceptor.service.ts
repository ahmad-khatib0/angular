import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { exhaustMap, map, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select('auth').pipe(
      take(1), // tells rxjs that i wanna take only one value from user, and then it unsubscribe automatically
      map((authData) => authData.user),
      exhaustMap((user) => {
        //because here we've tow observables (authService.user and http request),exhaustMap is going to wait
        // the 1th one to complete, and then replace the first observable with the second one in the call chain
        if (!user) return next.handle(req);
        const modifiedRequest = req.clone({
          params: new HttpParams().set('auth', user.token),
        });
        return next.handle(modifiedRequest);
      })
    );
  }
}
