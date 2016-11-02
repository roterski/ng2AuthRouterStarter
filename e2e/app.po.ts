import { browser, element, by } from 'protractor';

import { User } from './stubs/user';

export class ChangeMyNamePage {
  public host: string = 'http://localhost:4200';

  loginLink() {
    return element(by.linkText('Log In'));
  }

  signupLink() {
    return element(by.linkText('Sign Up'));
  }

  logoutLink() {
    return element(by.linkText('Log Out'));
  }

  emailInputField() {
    return element(by.css('input#email'));
  }

  passwordInputField() {
    return element(by.css('input#password'));
  }

  submitButton() {
    return element(by.buttonText('Submit'));
  }

  emailFieldErrors() {
    return element(by.css('input#email ~ app-error-label div div'));
  }

  passwordFieldErrors() {
    return element(by.css('input#password ~ app-error-label div div'));
  }

  formErrors() {
    return element(by.css('form app-error-label div div'));
  }

  authenticate(user: User) {
    browser.get('/log-in');
    this.emailInputField().sendKeys(user.email);
    this.passwordInputField().sendKeys(user.password);
    this.submitButton().click();
  }
}
