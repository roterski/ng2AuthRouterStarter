import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { LoggedInGuard }  from './logged-in-guard.service';
import { LoggedOutGuard } from './logged-out-guard.service';
import { AuthService }    from './auth.service';

import { LoginComponent }          from './login/login.component';
import { SignUpComponent }         from './sign-up/sign-up.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivateChild: [LoggedOutGuard],
        children: [
          { path: 'log-in', component: LoginComponent },
          { path: 'login', redirectTo: '/log-in' },
          { path: 'sign-up', component: SignUpComponent },
          { path: 'signup', redirectTo: '/sign-up' }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoggedInGuard,
    AuthService,
    LoggedOutGuard
  ]
})
export class AuthenticationRoutingModule {}
