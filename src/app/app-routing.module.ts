import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoggedInGuard } from './authentication/logged-in-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'account',
        loadChildren: 'app/account/account.module#AccountModule',
        canLoad: [LoggedInGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {}
