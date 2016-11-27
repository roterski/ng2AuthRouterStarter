import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';
import { Response }   from '@angular/http';

import { Angular2TokenService } from 'angular2-token';
import { Observable }           from 'rxjs/Observable';

@Injectable()
export class AuthService {
  redirectUrl: string;

  constructor(private tokenService: Angular2TokenService, public router: Router) {}

  logIn(email: string, password: string): Observable<Response> {
    return this.tokenService.signIn({ email: email,
                                     password: password });
  }

  signUp(email: string, password: string): Observable<Response> {
    return this.tokenService.registerAccount({ email: email,
                                               password: password,
                                               passwordConfirmation: password });
  }

  signInWithGithub(): Observable<any> {
    return this.tokenService.signInOAuth('github');
  }

  proccessOauthCallback(): void {
    this.tokenService.processOAuthCallback();
    this.redirectAfterLogin();
  }

  logOut(): void {
    this.redirectUrl = undefined;
    this.tokenService.signOut();
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  redirectAfterLogin(): void {
    let redirectTo = this.redirectUrl ? this.redirectUrl : '/';
    this.redirectUrl = undefined;
    this.router.navigate([redirectTo]);
  }
}
