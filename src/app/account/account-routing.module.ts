import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AccountComponent }  from './account.component';

import { LoggedInGuard } from '../authentication/logged-in-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [LoggedInGuard],
        component: AccountComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AccountRoutingModule {}
