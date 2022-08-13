import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({ selector: 'app-auth', templateUrl: './auth.component.html' })
export class AuthComponent {
  constructor(private authService: AuthService) {}
  isLoginMode: boolean = true;
  isLoading = false;
  error: string = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    // if (!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    let authObservable: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe({
      next: (res) => {
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.error = err;
      },
    });
    form.reset();
  }
}
