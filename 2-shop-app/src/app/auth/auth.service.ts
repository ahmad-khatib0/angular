import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCF1hiSAMUke-BABhg4iXr__Xk3PGHiIZM',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  login(email: string, password) {
    return this.http
      .post<AuthResponseData>(
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCF1hiSAMUke-BABhg4iXr__Xk3PGHiIZM',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'an unknown error occurred  ';
    if (!errorResponse.error || !errorResponse.error.error)
      throwError(() => new Error(errorMessage));
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
    return throwError(() => new Error(errorMessage));
  }
}