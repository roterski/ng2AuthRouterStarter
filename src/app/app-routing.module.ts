import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoggedInGuard } from './authentication/logged-in-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {}
