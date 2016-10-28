import { Component } from '@angular/core';
import { AuthService }    from './auth.service';

@Component({
  selector: 'auth-links',
  template: `
    <a routerLink="/log-in" routerLinkActive="active" *ngIf="isLoggedOut()">Log In</a>
    <a routerLink="/sign-up" routerLinkActive="active" *ngIf="isLoggedOut()">Sign Up</a>
    <a (click)="logOut()" *ngIf="isLoggedIn()">Log Out</a>
  `
})
export class AuthLinks {
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return !this.authService.isLoggedIn();
  }

  logOut(): void {
    this.authService.logOut();
  }
}
