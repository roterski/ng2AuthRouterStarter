import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule,
         ReactiveFormsModule }    from '@angular/forms';
import { HttpModule as Http }     from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { SharedModule }         from './shared/shared.module';
import { HomeModule }           from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { AuthLinksComponent } from './authentication/auth-links.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Http,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AuthenticationModule
  ],
  declarations: [
    AppComponent,
    AuthLinksComponent
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
