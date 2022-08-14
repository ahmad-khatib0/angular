import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({ selector: 'app-auth', templateUrl: './auth.component.html' })
export class AuthComponent implements OnDestroy, OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.storeSub = this.store.select('auth').subscribe((authData) => {
      this.isLoading = authData.loading;
      this.error = authData.authError;
      if (this.error) this.showErrorAlert(this.error);
    });
  }

  isLoginMode: boolean = true;
  isLoading = false;
  error: string = null;
  private closeSubscription: Subscription;
  private storeSub: Subscription;

  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    // if (!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode)
      this.store.dispatch(new AuthActions.LoginStart({ email, password }));
    else this.store.dispatch(new AuthActions.SignupStart({ email, password }));
    form.reset();
  }

  onHandleClose() {
    this.store.dispatch(new AuthActions.ClearAuthenticationError());
  }

  private showErrorAlert(message: string) {
    // const alertComp   = new AlertComponent() valid ts, but not angular
    const alertComFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainer = this.alertHost.viewContainerRef;
    hostViewContainer.clear();

    const componentRef = hostViewContainer.createComponent(alertComFactory);
    componentRef.instance.message = message;
    this.closeSubscription = componentRef.instance.onCLose.subscribe(() => {
      this.closeSubscription.unsubscribe();
      hostViewContainer.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.closeSubscription) this.closeSubscription.unsubscribe();
    if (this.storeSub) this.storeSub.unsubscribe();
  }
}
