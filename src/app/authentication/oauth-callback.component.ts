import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  template: ''
})
export class OauthCallbackComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.proccessOauthCallback();
  }
}
