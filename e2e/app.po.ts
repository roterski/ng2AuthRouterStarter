import { browser, element, by } from 'protractor';

export class ChangeMyNamePage {
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

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
}
