import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AuthLinksComponent } from './auth-links.component';
import { AuthService }    from './auth.service';

let component: AuthLinksComponent;
let fixture: ComponentFixture<AuthLinksComponent>;
let debugElements: Array<DebugElement>;
let elements;
let authService: AuthService;

let testSetup = (isLoggedIn) => {
  let authServiceStub = {
    isLoggedIn() { return isLoggedIn; }
  };
  TestBed.configureTestingModule({
    declarations: [ AuthLinksComponent ],
    providers:    [ { provide: AuthService, useValue: authServiceStub }]
  });
  fixture = TestBed.createComponent(AuthLinksComponent);
  component = fixture.componentInstance;
  authService = fixture.debugElement.injector.get(AuthService);
  fixture.detectChanges();
  debugElements = fixture.debugElement.queryAll(By.all());
  elements = debugElements.map((el) => { return el.nativeElement.textContent; });
};

describe('Component: AuthLinksComponent', () => {
  describe('when logged in', () => {
    beforeEach(() => {
      testSetup.call(this, true);
    });

    it('shows Log Out link', () => {
      expect(elements).toContain('Log Out');
    });
  });

  describe('when logged out', () => {
    beforeEach(() => {
      testSetup.call(this, false);
    });

    it('shows Log In link', () => {
      expect(elements).toContain('Log In');
    });

    it('shows Sign Up link', () => {
      expect(elements).toContain('Sign Up');
    });
  });
});
