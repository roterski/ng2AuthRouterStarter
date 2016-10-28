import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule,
         ReactiveFormsModule }    from '@angular/forms';
import { HttpModule as Http }     from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule }         from './shared/shared.module';

import { AuthLinks } from './authentication/auth-links.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    AppRoutingModule,
    Http
  ],
  declarations: [
    AppComponent,
    AuthLinks
  ],
  providers: [
    Angular2TokenService
  ],
  exports: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
